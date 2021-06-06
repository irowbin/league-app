import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ToolbarTypes } from '@app/modules/common/models';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  /**
   * Whether the toolbar selection is changed.
   * Emits enum value of `ToolbarTypes` on each changes.
   * @see ToolbarTypes
   */
 @Output()
 readonly toolbarChanged = new EventEmitter<ToolbarTypes>()

  /**
   * Selection options of toolbar button.
   * @see ToolbarTypes
   */
  readonly  options = ToolbarTypes

  /**
   * Sets default to `TABLE` or incoming from parent.
   * @see ToolbarTypes
   */
  @Input()
  defaultOption = ToolbarTypes.TABLE
}
