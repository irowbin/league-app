import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SimpleTableLibComponent {
    constructor() {
        this.source = [];
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
    /**
     * Data source reference
     */
    set dataSource(s) {
        if (!s)
            return;
        const isIterable = Array.isArray(s);
        if (!isIterable) {
            throw Error('datasource should be an array but found ' + typeof s + ' instead');
        }
        this.isObjectType = s.some(o => !Array.isArray(o) && typeof o === 'object' && typeof o !== 'function');
        this.isValueType = s.some(o => typeof o !== 'object' && typeof o !== 'function');
        this.source = s;
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
        *ngFor="let item of source; index as index"
        [ngClass]="rowClass"
      >
        <td *ngFor="let prop of columnProps"
            [ngClass]="cellClass">
          {{
          showRowNumber && prop.dataField === '#'
            ? index + 1
            : isObjectType ? item[prop.dataField] : isValueType ? item : ''
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
        *ngFor="let item of source; index as index"
        [ngClass]="rowClass"
      >
        <td *ngFor="let prop of columnProps"
            [ngClass]="cellClass">
          {{
          showRowNumber && prop.dataField === '#'
            ? index + 1
            : isObjectType ? item[prop.dataField] : isValueType ? item : ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXRhYmxlLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zaW1wbGUtdGFibGUtbGliL3NyYy9saWIvc2ltcGxlLXRhYmxlLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQWtDL0MsTUFBTSxPQUFPLHVCQUF1QjtJQTlCcEM7UUErQkUsV0FBTSxHQUEyQixFQUFFLENBQUE7UUEwQm5DOztXQUVHO1FBRUgsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQjs7V0FFRztRQUVILG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXJCOztXQUVHO1FBRUgsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmOztXQUVHO1FBRUgsYUFBUSxHQUFHLEVBQUUsQ0FBQztLQTRCZjtJQXRFQzs7T0FFRztJQUNILElBQ0ksVUFBVSxDQUFDLENBQXlCO1FBQ3RDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUVmLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFbkMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE1BQU0sS0FBSyxDQUFDLDBDQUEwQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFBO1NBQ2hGO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQztRQUN2RyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUM7UUFFakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFFakIsQ0FBQztJQTBDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTztRQUMvQix1RUFBdUU7UUFDdkUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLG1CQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYTtZQUNuQyxDQUFDLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOztvSEExRVUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsOFJBNUJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlQ7MkZBRVUsdUJBQXVCO2tCQTlCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJUO2lCQUNGOzhCQVlLLFVBQVU7c0JBRGIsS0FBSztnQkFxQk4sVUFBVTtzQkFEVCxLQUFLO2dCQU9OLGVBQWU7c0JBRGQsS0FBSztnQkFPTixTQUFTO3NCQURSLEtBQUs7Z0JBT04sUUFBUTtzQkFEUCxLQUFLO2dCQU9OLGFBQWE7c0JBRFosS0FBSztnQkFXTixZQUFZO3NCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBEYXRhU291cmNlPFQ+ID0gVFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZW1vLXNpbXBsZS10YWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRhYmxlIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBwcm9wIG9mIGNvbHVtblByb3BzXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImhlYWRlckNlbGxDbGFzc1wiPlxuICAgICAgICAgIHt7IHByb3AuY2FwdGlvbiB9fVxuICAgICAgICA8L3RoPlxuICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICA8dHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc291cmNlOyBpbmRleCBhcyBpbmRleFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInJvd0NsYXNzXCJcbiAgICAgID5cbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBwcm9wIG9mIGNvbHVtblByb3BzXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cImNlbGxDbGFzc1wiPlxuICAgICAgICAgIHt7XG4gICAgICAgICAgc2hvd1Jvd051bWJlciAmJiBwcm9wLmRhdGFGaWVsZCA9PT0gJyMnXG4gICAgICAgICAgICA/IGluZGV4ICsgMVxuICAgICAgICAgICAgOiBpc09iamVjdFR5cGUgPyBpdGVtW3Byb3AuZGF0YUZpZWxkXSA6IGlzVmFsdWVUeXBlID8gaXRlbSA6ICcnXG4gICAgICAgICAgfX1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlVGFibGVMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBzb3VyY2U6IERhdGFTb3VyY2U8QXJyYXk8YW55Pj4gPSBbXVxuXG4gIGlzVmFsdWVUeXBlOiBib29sZWFuXG5cbiAgaXNPYmplY3RUeXBlOiBib29sZWFuXG5cbiAgLyoqXG4gICAqIERhdGEgc291cmNlIHJlZmVyZW5jZVxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGRhdGFTb3VyY2UoczogRGF0YVNvdXJjZTxBcnJheTxhbnk+Pikge1xuICAgIGlmICghcykgcmV0dXJuO1xuXG4gICAgY29uc3QgaXNJdGVyYWJsZSA9IEFycmF5LmlzQXJyYXkocylcblxuICAgIGlmICghaXNJdGVyYWJsZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2RhdGFzb3VyY2Ugc2hvdWxkIGJlIGFuIGFycmF5IGJ1dCBmb3VuZCAnICsgdHlwZW9mIHMgKyAnIGluc3RlYWQnKVxuICAgIH1cblxuICAgIHRoaXMuaXNPYmplY3RUeXBlID0gcy5zb21lKG8gPT4gIUFycmF5LmlzQXJyYXkobykgJiYgdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIHR5cGVvZiBvICE9PSAnZnVuY3Rpb24nKTtcbiAgICB0aGlzLmlzVmFsdWVUeXBlID0gcy5zb21lKG8gPT4gdHlwZW9mIG8gIT09ICdvYmplY3QnICYmIHR5cGVvZiBvICE9PSAnZnVuY3Rpb24nKTtcblxuICAgIHRoaXMuc291cmNlID0gc1xuXG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0YWJsZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHRhYmxlQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0aCBjZWxsLlxuICAgKi9cbiAgQElucHV0KClcbiAgaGVhZGVyQ2VsbENsYXNzID0gJyc7XG5cbiAgLyoqKlxuICAgKiBBcHBseSBjc3MgY2xhc3MgdG8gdGhlIHRkIGNlbGwuXG4gICAqL1xuICBASW5wdXQoKVxuICBjZWxsQ2xhc3MgPSAnJztcblxuICAvKipcbiAgICogQXBwbHkgY3NzIGNsYXNzIHRvIHRoZSB0YWJsZSBib2R5IHJvdy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHJvd0NsYXNzID0gJyc7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc2hvdyByb3cgbnVtYmVyXG4gICAqL1xuICBASW5wdXQoKVxuICBzaG93Um93TnVtYmVyOiBib29sZWFuO1xuXG4gIGNvbHVtblByb3BzOiBBcnJheTx7IGRhdGFGaWVsZDogc3RyaW5nOyBjYXB0aW9uOiBzdHJpbmcgfT47XG5cbiAgLyoqXG4gICAqIER5bmFtaWMgY29sdW1uIHByb3BzLlxuICAgKiBgZGF0YUZpZWxkYCBpcyB1c2VkIHRvIG1hcCB2YWx1ZSBmcm9tIHRoZSBvYmplY3QuXG4gICAqIGBjYXB0aW9uYCBpcyB1c2VkIGFzIHRhYmxlIGhlYWRlciBsYWJlbC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHVtbkNvbmZpZzogQXJyYXk8eyBkYXRhRmllbGQ6IHN0cmluZzsgY2FwdGlvbjogc3RyaW5nIH0+O1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2x1bW5Db25maWcpIHJldHVybjtcbiAgICAvLyBkb24ndCBqdXN0IG11dGF0ZSB0aGUgb3JpZ2luLCBtYWtlIGEgbmV3IGNvcHkgb2YgaXQgYW5kIHVzZSBsb2NhbGx5LlxuICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbHVtbkNvbmZpZy5tYXAoKGMpID0+ICh7Li4uY30pKTtcbiAgICB0aGlzLmNvbHVtblByb3BzID0gdGhpcy5zaG93Um93TnVtYmVyXG4gICAgICA/IFt7Y2FwdGlvbjogJyMnLCBkYXRhRmllbGQ6ICcjJ30sIC4uLmNvcHldXG4gICAgICA6IGNvcHk7XG4gIH1cblxuICAvLyBUT0RPOiBtYXliZSBtb3JlIGZlYXR1cmUgdG8gaW1wbGVtZW50IGZvciB0YWJsZSBpbnRlcmFjdGlvbiwgc3VjaCBhcyByb3cgY2xpY2tlZCBldGMuLFxufVxuIl19