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

  constructor(public dataHandlerService: LeagueDataHandlerService) {}

  // TODO: more abstract members

  // share across components
  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
