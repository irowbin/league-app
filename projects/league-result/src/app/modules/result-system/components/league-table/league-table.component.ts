import { OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import { LeagueChartModel } from '@app/modules/common/models';
import { LeagueDataHandlerService } from '../../handlers/league-data-handler.service';
import { ResultSystemBase } from '@modules/result-system/result-system.base';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent extends ResultSystemBase
  implements OnChanges {
  columnConfig: Array<{
    dataField: keyof LeagueChartModel;
    caption: string;
  }> = [
    { dataField: 'teamName', caption: 'Name' },
    { dataField: 'played', caption: 'PLD' },
    { dataField: 'won', caption: 'W' },
    { dataField: 'lost', caption: 'L' },
    { dataField: 'drawn', caption: 'D' },
    { dataField: 'goalsScored', caption: 'Pts' }
  ];

  constructor(public dataHandlerService: LeagueDataHandlerService) {
    super(dataHandlerService);
  }

  // inherit as it shares data to the view using input prop and mutation
  ngOnChanges(): void {
    super.ngOnChanges();
  }
}
