import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnChanges, Output} from '@angular/core';
import {LeagueDataHandlerService} from '../../handlers/league-data-handler.service';
import {ResultSystemBase} from '@modules/result-system/result-system.base';

@Component({
  selector: 'app-result-preview',
  templateUrl: './result-preview.component.html',
  styleUrls: ['./result-preview.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ResultPreviewComponent extends ResultSystemBase
  implements OnChanges {
  /**
   * Emits an event with uuid when team row selected so we can
   * find a team by uuid and modify it.
   */
  @Output()
  readonly teamSelected = new EventEmitter<string>();

  constructor(public handlerService: LeagueDataHandlerService, private cdr: ChangeDetectorRef) {
    super(handlerService);
  }

  private initViewData(): void {
    this.dataHandlerService
      .computeViewResults(this.leagueData)
      .then((r) => {
        this.cdr.markForCheck()
        this.resultPreview = r.result
      });
  }

  // inherit as it shares data to the view using input prop and mutation
  ngOnChanges(): void {
    if (!this.leagueData) return
    this.initViewData();
  }
}
