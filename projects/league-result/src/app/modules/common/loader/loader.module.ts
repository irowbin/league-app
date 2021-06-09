import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleBubbleComponent } from './circle-bubble/circle-bubble.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CircleBubbleComponent],
  exports: [CircleBubbleComponent],
})
export class LoaderModule {}
