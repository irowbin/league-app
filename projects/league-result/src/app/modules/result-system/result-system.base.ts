import { OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { LeagueChartModel, TeamMatchesModel } from '@modules/common/models';
import { DataSource } from 'simple-table-lib';

@Component({ template: '' })
export class ResultSystemBase implements OnDestroy {
  /**
   * Token to dispose a collection  of rxjs observers on component disposal.
   */
  readonly toDestroy$ = new Subject<void>();

  /**
   * League ranking computed data
   */
  tableData: DataSource<Array<Partial<LeagueChartModel>>> = [];

  /**
   * Result preview ranking computed data
   */
  resultPreview: Array<{ key: string; value: Array<TeamMatchesModel> }> = [];

  /**
   * Flat team data that will transform as needed for league table or result preview.
   */
  @Input()
  leagueData: Array<TeamMatchesModel>;

  // TODO: more abstract members

  constructor(public dataHandlerService: LeagueDataHandlerService) {}

  private initTableData(): void {
    this.dataHandlerService
      .computeRankingResult(this.leagueData)
      .then((r) => (this.tableData = r.result));
  }

  private initViewData(): void {
    this.dataHandlerService
      .computeViewResults(this.leagueData)
      .then((r) => (this.resultPreview = r.result));
  }

  // share across components
  ngOnChanges(): void {
    if (!this.leagueData) return;
    this.initTableData();
    this.initViewData();
  }

  // share across components
  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
