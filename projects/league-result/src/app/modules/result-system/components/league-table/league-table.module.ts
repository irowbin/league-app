import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueTableComponent } from './league-table.component';
import { SimpleTableLibModule } from 'simple-table-lib';

@NgModule({
  imports: [CommonModule, SimpleTableLibModule],
  exports: [LeagueTableComponent],
  declarations: [LeagueTableComponent],
})
export class LeagueTableModule {}
