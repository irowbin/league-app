import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SimpleTableLibComponent implements OnChanges {
    /**
     * Data source reference
     */
    dataSource: Array<any>;
    /**
     * Apply css class to the table.
     */
    tableClass: string;
    /**
     * Apply css class to the th cell.
     */
    headerCellClass: string;
    /***
     * Apply css class to the td cell.
     */
    cellClass: string;
    /**
     * Apply css class to the table body row.
     */
    rowClass: string;
    /**
     * Whether to show row number
     */
    showRowNumber: boolean;
    columnProps: Array<{
        dataField: string;
        caption: string;
    }>;
    /**
     * Dynamic column props.
     * `dataField` is used to map value from the object.
     * `caption` is used as table header label.
     */
    columnConfig: Array<{
        dataField: string;
        caption: string;
    }>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SimpleTableLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SimpleTableLibComponent, "demo-simple-table", never, { "dataSource": "dataSource"; "tableClass": "tableClass"; "headerCellClass": "headerCellClass"; "cellClass": "cellClass"; "rowClass": "rowClass"; "showRowNumber": "showRowNumber"; "columnConfig": "columnConfig"; }, {}, never, never>;
}
