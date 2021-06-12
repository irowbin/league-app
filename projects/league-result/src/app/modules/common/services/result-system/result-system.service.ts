import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, of } from 'rxjs';
import { MOCK_DATA } from '@app/fakeData/static-storage';
import { TeamMatchesModel } from '@modules/common/models';
import { socket } from '../../socket/socket-io.extension';
import { delay, switchMap, tap } from 'rxjs/operators';
import { UuidGenerator } from '@modules/common/utils/uuid-generator';

const gen = new UuidGenerator();

@Injectable()
export class ResultSystemService {
  private readonly _notify = new BehaviorSubject<Array<TeamMatchesModel>>([]);

  set syncStorageData(data: Array<TeamMatchesModel>) {
    if (!data) return;
    of(data)
      .pipe(
        tap((d) => ResultSystemService.updateStorage(d)),
        delay(200)
      )
      .subscribe(() => this._notify.next(ResultSystemService.loadLeagueData()));
  }

  constructor() {
    const storage = sessionStorage.getItem('league_items');
    if (!storage)
      ResultSystemService.updateStorage(
        MOCK_DATA.map((m) => ({ ...m, uuid: gen._uuid }))
      );
  }

  /**
   * Dedupe and return the updated version of data.
   * @param data
   */
  private static dedupeData = (data: Array<TeamMatchesModel>) =>
    [...(data || [])].reduce((accum, el) => {
      const index = accum.findIndex((u) => u.uuid === el.uuid);
      if (index > -1) {
        accum[index] = { ...accum[index], ...el };
      } else {
        accum.push(el);
      }
      return accum;
    }, [] as Array<TeamMatchesModel>);

  /**
   * Update most recent data into the local storage
   * @param data incoming data to update.
   * @see dedupeData
   */
  private static updateStorage(data?: Array<TeamMatchesModel>): void {
    sessionStorage.setItem('league_items', JSON.stringify(data));
  }

  /**
   * Check on local storage saved data and merge with static or static only which then return by deduping it.
   */
  private static loadLeagueData(): Array<TeamMatchesModel> {
    const storage = sessionStorage.getItem('league_items');
    return ResultSystemService.dedupeData(JSON.parse(storage) || []);
  }

  /**
   * Fetches league data
   */
  fetchLeagueData(): Observable<Array<TeamMatchesModel>> {
    const obs = of(null).pipe(switchMap(() => this._notify));
    this._notify.next(ResultSystemService.loadLeagueData());
    return obs;
  }

  /**
   * Fetches a league by uuid
   */
  fetchLeague(uuid: string): Observable<TeamMatchesModel> {
    const data = ResultSystemService.loadLeagueData();
    return of(data.find((t) => t.uuid === uuid));
  }

  /**
   * Adds or updates the league data
   * @param payload League payload whether to update or create new
   */
  addOrUpdateLeague(payload: TeamMatchesModel): Observable<boolean> {
    const data = ResultSystemService.loadLeagueData();
    const found = data.find((i) => i.uuid === payload.uuid);
    if (found) {
      // probably need to optimize
      data[data.indexOf(found)] = { ...found, ...payload };
    } else {
      data.push({ ...payload });
    }
    ResultSystemService.updateStorage(data);
    socket.emit('SYNC_LEAGUE', ResultSystemService.loadLeagueData());
    return of(true);
  }
}
