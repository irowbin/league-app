import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SimpleTableLibComponent {
    constructor() {
        /**
         * Data source reference
         */
        this.dataSource = [];
        /**
         * Apply css class to the table.
         */
        this.tableClass = '';
        /**
         * Apply css class to the th cell.
         */
        this.headerCellClass = '';
        /***
         * Apply css class to the td cell.
         */
        this.cellClass = '';
        /**
         * Apply css class to the table body row.
         */
        this.rowClass = '';
    }
    ngOnChanges() {
        if (!this.columnConfig)
            return;
        // don't just mutate the origin, make a new copy of it and use locally.
        const copy = this.columnConfig.map((c) => (Object.assign({}, c)));
        this.columnProps = this.showRowNumber
            ? [{ caption: '#', dataField: '#' }, ...copy]
            : copy;
    }
}
SimpleTableLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleTableLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.3", type: SimpleTableLibComponent, selector: "demo-simple-table", inputs: { dataSource: "dataSource", tableClass: "tableClass", headerCellClass: "headerCellClass", cellClass: "cellClass", rowClass: "rowClass", showRowNumber: "showRowNumber", columnConfig: "columnConfig" }, usesOnChanges: true, ngImport: i0, template: `
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
  `, isInline: true, directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { dataSource: [{
                type: Input
            }], tableClass: [{
                type: Input
            }], headerCellClass: [{
                type: Input
            }], cellClass: [{
                type: Input
            }], rowClass: [{
                type: Input
            }], showRowNumber: [{
                type: Input
            }], columnConfig: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zaW1wbGUtdGFibGUtbGliL3NyYy9saWIvc2ltcGxlLXRhYmxlLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQWdDL0MsTUFBTSxPQUFPLHVCQUF1QjtJQTlCcEM7UUErQkU7O1dBRUc7UUFFSCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBRTVCOztXQUVHO1FBRUgsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQjs7V0FFRztRQUVILG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXJCOztXQUVHO1FBRUgsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmOztXQUVHO1FBRUgsYUFBUSxHQUFHLEVBQUUsQ0FBQztLQTRCZjtJQVZDLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFBRSxPQUFPO1FBQy9CLHVFQUF1RTtRQUN2RSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsbUJBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhO1lBQ25DLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDM0MsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7O29IQXREVSx1QkFBdUI7d0dBQXZCLHVCQUF1Qiw4UkE1QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDsyRkFFVSx1QkFBdUI7a0JBOUJuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlQ7aUJBQ0Y7OEJBTUMsVUFBVTtzQkFEVCxLQUFLO2dCQU9OLFVBQVU7c0JBRFQsS0FBSztnQkFPTixlQUFlO3NCQURkLEtBQUs7Z0JBT04sU0FBUztzQkFEUixLQUFLO2dCQU9OLFFBQVE7c0JBRFAsS0FBSztnQkFPTixhQUFhO3NCQURaLEtBQUs7Z0JBV04sWUFBWTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVtby1zaW1wbGUtdGFibGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0YWJsZSBbbmdDbGFzc109XCJ0YWJsZUNsYXNzXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICA8dHI+XG4gICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgcHJvcCBvZiBjb2x1bW5Qcm9wc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJoZWFkZXJDZWxsQ2xhc3NcIj5cbiAgICAgICAgICB7eyBwcm9wLmNhcHRpb24gfX1cbiAgICAgICAgPC90aD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgPHRyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFTb3VyY2U7IGluZGV4IGFzIGluZGV4XCJcbiAgICAgICAgW25nQ2xhc3NdPVwicm93Q2xhc3NcIlxuICAgICAgPlxuICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHByb3Agb2YgY29sdW1uUHJvcHNcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiY2VsbENsYXNzXCI+XG4gICAgICAgICAge3tcbiAgICAgICAgICBzaG93Um93TnVtYmVyICYmIHByb3AuZGF0YUZpZWxkID09PSAnIydcbiAgICAgICAgICAgID8gaW5kZXggKyAxXG4gICAgICAgICAgICA6IGl0ZW1bcHJvcC5kYXRhRmllbGRdXG4gICAgICAgICAgfX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXN7XG4gIC8qKlxuICAgKiBEYXRhIHNvdXJjZSByZWZlcmVuY2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRhdGFTb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0YWJsZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHRhYmxlQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0aCBjZWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyQ2VsbENsYXNzID0gJyc7XG5cbiAgLyoqKlxuICAgKiBBcHBseSBjc3MgY2xhc3MgdG8gdGhlIHRkIGNlbGwuXG4gICAqL1xuICBASW5wdXQoKVxuICBjZWxsQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0YWJsZSBib2R5IHJvdy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHJvd0NsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyByb3cgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93Um93TnVtYmVyOiBib29sZWFuO1xuXG4gIGNvbHVtblByb3BzOiBBcnJheTx7IGRhdGFGaWVsZDogc3RyaW5nOyBjYXB0aW9uOiBzdHJpbmcgfT47XG5cbiAgLyoqXG4gICAqIER5bmFtaWMgY29sdW1uIHByb3BzLlxuICAgKiBgZGF0YUZpZWxkYCBpcyB1c2VkIHRvIG1hcCB2YWx1ZSBmcm9tIHRoZSBvYmplY3QuXG4gICAqIGBjYXB0aW9uYCBpcyB1c2VkIGFzIHRhYmxlIGhlYWRlciBsYWJlbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8eyBkYXRhRmllbGQ6IHN0cmluZzsgY2FwdGlvbjogc3RyaW5nIH0+O1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2x1bW5Db25maWcpIHJldHVybjtcbiAgICAvLyBkb24ndCBqdXN0IG11dGF0ZSB0aGUgb3JpZ2luLCBtYWtlIGEgbmV3IGNvcHkgb2YgaXQgYW5kIHVzZSBsb2NhbGx5LlxuICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGMpID0+ICh7Li4uY30pKTtcbiAgICB0aGlzLmNvbHVtblByb3BzID0gdGhpcy5zaG93Um93TnVtYmVyXG4gICAgICA/IFt7Y2FwdGlvbjogJyMnLCBkYXRhRmllbGQ6ICcjJ30sIC4uLmNvcHldXG4gICAgICA6IGNvcHk7XG4gIH1cblxuICAvLyBUT0RPOiBtYXliZSBtb3JlIGZlYXR1cmUgdG8gaW1wbGVtZW50IGZvciB0YWJsZSBpbnRlcmFjdGlvbiwgc3VjaCBhcyByb3cgY2xpY2tlZCBldGMuLFxufVxuIl19