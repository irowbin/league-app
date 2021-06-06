import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {MOCK_DATA} from "@app/fakeData/static-storage";
import { TeamMatchesModel } from "@modules/common/models";

@Injectable()
export class ResultSystemService {

  /**
   * Fetches league data
   */
  fetchLeagueData(): Observable<Array<TeamMatchesModel>> {
    return of(MOCK_DATA)
  }

  /**
   * Fetches a league by uuid
   */
  fetchLeague(uuid: string): Observable<TeamMatchesModel> {
    return of(MOCK_DATA.find(t => t.uuid === uuid))
  }

  /**
   * Adds or updates the league data
   * @param payload League payload whether to update or create new
   */
  addOrUpdateLeague(payload: TeamMatchesModel): Observable<boolean>{
    const found = MOCK_DATA.find(i => i.uuid === payload.uuid);
    if (found) {
      // probably need to optimize
      MOCK_DATA[MOCK_DATA.indexOf(found)] = {...found, ...payload}
    } else {
      MOCK_DATA.push({...payload})
    }
    return of(true);
  }
}
