import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TeamMatchesModel } from '@app/modules/common/models';
import { LeagueDataHandler } from '../../handlers/league-data.handler';

@Component({
  selector: 'app-result-preview',
  templateUrl: './result-preview.component.html',
  styleUrls: ['./result-preview.component.scss']
})
export class ResultPreviewComponent extends LeagueDataHandler {
  rows: Array<{ key: string; value: Array<TeamMatchesModel> }> = []

  /**
   * Emits an event with uuid when team row selected so we can
   * find a team by uuid and modify it.
   */
  @Output()
  readonly teamSelected = new EventEmitter<string>()

  /**
   * Once the data arrives, the `computeViewResults` will transform for the preview UI.
   * @param data Data collection of `TeamMatchesModel`
   * @see LeagueDataHandler
   * @see computeViewResults
   */
  @Input()
  set leagueData(data: Array<TeamMatchesModel>) {
    if (!data) return;
    this.rows = this.computeViewResults(data)
  }
}
