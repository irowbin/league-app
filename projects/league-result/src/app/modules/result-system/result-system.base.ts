import { OnDestroy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { LeagueDataHandlerService } from '@modules/result-system/handlers/league-data-handler.service';
import { LeagueChartModel, TeamMatchesModel } from '@modules/common/models';

@Component({ template: '' })
export class ResultSystemBase implements OnDestroy {
  /**
   * Token to dispose a collection  of rxjs observers on component disposal.
   */
  readonly toDestroy$ = new Subject<void>();

  /**
   * League ranking computed data
   */
  tableData: Array<Partial<LeagueChartModel>> = [];

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

  // share across components
  ngOnChanges(): void {
    if (!this.leagueData) return;
    this.tableData = this.dataHandlerService.computeRankingResult(
      this.leagueData
    );
    this.resultPreview = this.dataHandlerService.computeViewResults(
      this.leagueData
    );
  }

  // share across components
  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
