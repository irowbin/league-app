import {OnChanges} from '@angular/core';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'demo-simple-table',
  template: `
    <table [ngClass]="tableClass">
      <thead>
      <tr>
        <th *ngFor="let prop of columnProps"
            [ngClass]="headerCellClass">
          {{ prop.caption }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        *ngFor="let item of dataSource; index as index"
        [ngClass]="rowClass"
      >
        <td *ngFor="let prop of columnProps"
            [ngClass]="cellClass">
          {{
          showRowNumber && prop.dataField === '#'
            ? index + 1
            : item[prop.dataField]
          }}
        </td>
      </tr>
      </tbody>
    </table>
  `
})
export class SimpleTableLibComponent implements OnChanges{
  /**
   * Data source reference
   */
  @Input()
  dataSource: Array<any> = [];

  /**
   * Apply css class to the table.
   */
  @Input()
  tableClass = '';

  /**
   * Apply css class to the th cell.
   */
  @Input()
  headerCellClass = '';

  /***
   * Apply css class to the td cell.
   */
  @Input()
  cellClass = '';

  /**
   * Apply css class to the table body row.
   */
  @Input()
  rowClass = '';

  /**
   * Whether to show row number
   */
  @Input()
  showRowNumber: boolean;

  columnProps: Array<{ dataField: string; caption: string }>;

  /**
   * Dynamic column props.
   * `dataField` is used to map value from the object.
   * `caption` is used as table header label.
   */
  @Input()
  columnConfig: Array<{ dataField: string; caption: string }>;

  ngOnChanges(): void {
    if (!this.columnConfig) return;
    // don't just mutate the origin, make a new copy of it and use locally.
    const copy = this.columnConfig.map((c) => ({...c}));
    this.columnProps = this.showRowNumber
      ? [{caption: '#', dataField: '#'}, ...copy]
      : copy;
  }

  // TODO: maybe more feature to implement for table interaction, such as row clicked etc.,
}
