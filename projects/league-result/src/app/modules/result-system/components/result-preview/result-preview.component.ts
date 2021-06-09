import { OnChanges } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { LeagueDataHandlerService } from '../../handlers/league-data-handler.service';
import { ResultSystemBase } from '@modules/result-system/result-system.base';

@Component({
  selector: 'app-result-preview',
  templateUrl: './result-preview.component.html',
  styleUrls: ['./result-preview.component.scss']
})
export class ResultPreviewComponent extends ResultSystemBase
  implements OnChanges {
  /**
   * Emits an event with uuid when team row selected so we can
   * find a team by uuid and modify it.
   */
  @Output()
  readonly teamSelected = new EventEmitter<string>();

  constructor(public handlerService: LeagueDataHandlerService) {
    super(handlerService);
  }

  // inherit as it shares data to the view using input prop and mutation
  ngOnChanges(): void {
    super.ngOnChanges();
  }
}
