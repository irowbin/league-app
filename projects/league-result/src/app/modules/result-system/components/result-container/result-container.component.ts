import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ResultSystemService} from '@app/modules/common';
import {TeamMatchesModel, ToolbarTypes} from '@app/modules/common/models';
import {debounceTime, takeUntil, tap} from "rxjs/operators";
import {ResultSystemBase} from '../../result-system.base';
import {LeagueDataHandlerService} from "@modules/result-system/handlers/league-data-handler.service";

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent extends ResultSystemBase implements OnInit, OnDestroy {
  datasource: Array<TeamMatchesModel>
  /**
   * Default toolbar options as `TABLE` view.
   */
  selectedToolbarOption: ToolbarTypes = ToolbarTypes.TABLE

  /**
   * Toolbar options
   */
  readonly options = ToolbarTypes

  selectedTeam: TeamMatchesModel

  constructor(public resultService: ResultSystemService,
              public dataHandlerService: LeagueDataHandlerService,
              private cdr: ChangeDetectorRef) {
    super(dataHandlerService);
  }

  private initData(): void {
    this.resultService.fetchLeagueData().pipe(
      tap(() => this.datasource = null),
      debounceTime(100),
      takeUntil(this.toDestroy$)
    ).subscribe(d => {
      // once the data get updated or emitted from socket changes,
      // need to call the change detector to reflect changes on peer UI
      this.datasource = d
      this.cdr.detectChanges();
    })
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
  toolbarChanged(option: ToolbarTypes): void {
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
