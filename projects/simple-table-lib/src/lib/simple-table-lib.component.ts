import { OnChanges } from '@angular/core';
import { Component, Input } from '@angular/core';

export type DataSource<T> = T;

@Component({
  selector: 'demo-simple-table',
  template: `
    <table [ngClass]="tableClass">
      <thead>
        <tr>
          <th *ngFor="let prop of columnProps" [ngClass]="headerCellClass">
            {{ prop.caption }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of source; index as index" [ngClass]="rowClass">
          <td *ngFor="let prop of columnProps" [ngClass]="cellClass">
            {{
              showRowNumber && prop.dataField === '#'
                ? index + 1
                : isObjectType
                ? item[prop.dataField]
                : isValueType
                ? item
                : ''
            }}
          </td>
        </tr>
      </tbody>
    </table>
  `
})
export class SimpleTableLibComponent implements OnChanges {
  source: DataSource<Array<any>> = [];

  isValueType: boolean;

  isObjectType: boolean;

  /**
   * Data source reference
   */
  @Input()
  set dataSource(s: DataSource<Array<any>>) {
    if (!s) return;

    const isIterable = Array.isArray(s);

    if (!isIterable) {
      throw Error(
        'datasource should be an array but found ' + typeof s + ' instead'
      );
    }

    this.isObjectType = s.some(
      (o) =>
        !Array.isArray(o) && typeof o === 'object' && typeof o !== 'function'
    );
    this.isValueType = s.some(
      (o) => typeof o !== 'object' && typeof o !== 'function'
    );

    this.source = s;
  }

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
    const copy = this.columnConfig.map((c) => ({ ...c }));
    this.columnProps = this.showRowNumber
      ? [{ caption: '#', dataField: '#' }, ...copy]
      : copy;
  }

  // TODO: maybe more feature to implement for table interaction, such as row clicked etc.,
}
