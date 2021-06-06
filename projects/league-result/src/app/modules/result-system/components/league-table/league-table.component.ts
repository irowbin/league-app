import {Component, Input} from '@angular/core';
import { LeagueChartModel, TeamMatchesModel } from '@app/modules/common/models';
import { LeagueDataHandler } from '../../handlers/league-data.handler';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent extends LeagueDataHandler {

  @Input()
  set leagueData(data: Array<TeamMatchesModel>) {
    if (!data) return;
    this.rows = this.computeRankingResult(data)
  }

  rows: Array<Partial<LeagueChartModel>> = [];

  columnConfig: Array<{ dataField: keyof LeagueChartModel; caption: string }> = [
    {dataField: 'teamName', caption: 'Name'},
    {dataField: 'played', caption: 'PLD'},
    {dataField: 'won', caption: 'W'},
    {dataField: 'lost', caption: 'L'},
    {dataField: 'drawn', caption: 'D'},
    {dataField: 'goalsScored', caption: 'Pts'},
  ]

}
