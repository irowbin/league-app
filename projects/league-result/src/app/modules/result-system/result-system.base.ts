import {Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {UuidGenerator} from "@modules/common/utils/uuid-generator";

@Component({template: ''})
export class ResultSystemBase implements OnDestroy {
  /**
   * Token to dispose a collection  of rxjs observers on component disposal.
   */
  readonly toDestroy$ = new Subject<void>();

  // TODO: more abstract members

  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
