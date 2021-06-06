import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResultSystemService} from '@app/modules/common';
import {TeamMatchesModel, ToolbarTypes} from '@app/modules/common/models';
import {takeUntil} from "rxjs/operators";
import {ResultSystemBase} from '../../result-system.base';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent extends ResultSystemBase implements OnInit, OnDestroy {

  leagueData: Array<TeamMatchesModel> = []

  /**
   * Default toolbar options as `TABLE` view.
   */
  selectedToolbarOption: ToolbarTypes = ToolbarTypes.TABLE

  /**
   * Toolbar options
   */
  readonly options = ToolbarTypes

  selectedTeam: TeamMatchesModel

  constructor(private readonly resultService: ResultSystemService) {
    super()
  }

  private initData(): void {
    this.resultService.fetchLeagueData().pipe(
      takeUntil(this.toDestroy$)
    ).subscribe(d => this.leagueData = d)
  }

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  /**
   * Tracks toolbar changes on the UI
   * @param option Currently selected toolbar option.
   */
  toolbarChanged (option: ToolbarTypes): void {
    this.selectedToolbarOption = option
    // when
    this.selectedTeam = null
  }

  /**
   * When an user select a team from the view UI,
   * @param uuid An unique identifier of selected row.
   */
  async onTeamSelected(uuid: string): Promise<void> {
    this.selectedTeam = await this.resultService.fetchLeague(uuid).toPromise();
    this.selectedToolbarOption = ToolbarTypes.NEW_OR_MODIFY
  }

  /**
   * Once the form submission is done, do cleanup and repopulate data.
   * @param isSuccess Whether the form submission is succeeded.
   */
  formSubmitted(isSuccess: boolean): void {
    if (!isSuccess) return;
    // cleanup selected team data which is used to patching the form.
    this.selectedTeam = null;
    // once it done, navigate to table.
    this.selectedToolbarOption = ToolbarTypes.TABLE;
    // finally re-populate the data.
    this.initData();
  }

}
