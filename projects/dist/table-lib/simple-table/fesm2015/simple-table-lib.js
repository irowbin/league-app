import * as i0 from '@angular/core';
import { Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class SimpleTableLibComponent {
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

class SimpleTableLibModule {
}
SimpleTableLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SimpleTableLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibModule, declarations: [SimpleTableLibComponent], imports: [CommonModule], exports: [SimpleTableLibComponent] });
SimpleTableLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.3", ngImport: i0, type: SimpleTableLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SimpleTableLibComponent],
                    imports: [CommonModule],
                    exports: [SimpleTableLibComponent]
                }]
        }] });

/*
 * Public API Surface of simple-table-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleTableLibComponent, SimpleTableLibModule };
//# sourceMappingURL=simple-table-lib.js.map
