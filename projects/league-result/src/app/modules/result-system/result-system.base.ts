import {Component, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {UuidGenerator} from "@modules/common/utils/uuid-generator";

@Component({template: ''})
export class ResultSystemBase implements OnDestroy {
  /**
   * Token to dispose a collection  of rxjs observers on component disposal.
   */
  readonly toDestroy$ = new Subject<void>();

  /**
   * Generates new uuid for new entry
   * @see UuidGenerator
   */
  get _uuid(): string {
    return new UuidGenerator().Uuid()
  }

  ngOnDestroy(): void {
    this.toDestroy$.next();
    this.toDestroy$.complete();
  }
}
