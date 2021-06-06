import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {MOCK_DATA} from "@app/fakeData/static-storage";
import { TeamMatchesModel } from "@modules/common/models";

@Injectable()
export class ResultSystemService {
  private static updateStorage(data?: Array<TeamMatchesModel>): void {
    localStorage.setItem('league_items', JSON.stringify(data ? data : MOCK_DATA));
  }
  private static loadLeagueData(): Array<TeamMatchesModel> {
    const storage = localStorage.getItem('league_items');
    return storage ? JSON.parse(storage) : MOCK_DATA;
  }

  constructor() {
    const storage = localStorage.getItem('league_items');
    if(!storage)
    ResultSystemService.updateStorage();
  }
  /**
   * Fetches league data
   */
  fetchLeagueData(): Observable<Array<TeamMatchesModel>> {
    return of(ResultSystemService.loadLeagueData())
  }

  /**
   * Fetches a league by uuid
   */
  fetchLeague(uuid: string): Observable<TeamMatchesModel> {
    const data = ResultSystemService.loadLeagueData();
    return of(data.find(t => t.uuid === uuid));
  }

  /**
   * Adds or updates the league data
   * @param payload League payload whether to update or create new
   */
  addOrUpdateLeague(payload: TeamMatchesModel): Observable<boolean>{
    const data = ResultSystemService.loadLeagueData();
    const found = data.find(i => i.uuid === payload.uuid);
    if (found) {
      // probably need to optimize
      data[data.indexOf(found)] = {...found, ...payload}
    } else {
      data.push({...payload});
    }
    ResultSystemService.updateStorage(data);
    return of(true);
  }
}
