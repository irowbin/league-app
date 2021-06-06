import {NgModule} from '@angular/core';
import {SimpleTableLibComponent} from './simple-table-lib.component';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SimpleTableLibComponent
  ],
  imports: [CommonModule],
  exports: [
    SimpleTableLibComponent
  ]
})
export class SimpleTableLibModule {
}
