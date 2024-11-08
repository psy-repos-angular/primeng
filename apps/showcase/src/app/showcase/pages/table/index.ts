import { Component } from '@angular/core';
import { BasicDoc } from '@doc/table/basicdoc';
import { DynamicDoc } from '@doc/table/dynamicdoc';
import { TemplateDoc } from '@doc/table/templatedoc';
import { SizeDoc } from '@doc/table/sizedoc';
import { GridlinesDoc } from '@doc/table/gridlinesdoc';
import { StripedDoc } from '@doc/table/stripeddoc';
import { StyleDoc } from '@doc/table/styledoc';
import { ImportDoc } from '@doc/table/importdoc';
import { PaginatorBasicDoc } from '@doc/table/paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from '@doc/table/paginatorprogrammaticdoc';
import { SingleColumnSortDoc } from '@doc/table/singlecolumnsortdoc';
import { MultipleColumnsSortDoc } from '@doc/table/multiplecolumnssortdoc';
import { FilterBasicDoc } from '@doc/table/filterbasic';
import { SingleSelectionDoc } from '@doc/table/singleselectiondoc';
import { MultipleSelectionDoc } from '@doc/table/multipleselectiondoc';
import { RadioButtonSelectionDoc } from '@doc/table/radiobuttonselectiondoc';
import { CheckboxSelectionDoc } from '@doc/table/checkboxselectiondoc';
import { SelectionEventsDoc } from '@doc/table/selectioneventsdoc';
import { ColumnSelectionDoc } from '@doc/table/columnselectiondoc';
import { RowExpansionDoc } from '@doc/table/rowexpansiondoc';
import { CellEditDoc } from '@doc/table/celleditdoc';
import { RowEditDoc } from '@doc/table/roweditdoc';
import { VerticalScrollDoc } from '@doc/table/verticalscrolldoc';
import { FlexibleScrollDoc } from '@doc/table/flexiblescrolldoc';
import { HorizontalScrollDoc } from '@doc/table/horizontalscrolldoc';
import { FrozenRowsDoc } from '@doc/table/frozenrowsdoc';
import { FrozenColumnsDoc } from '@doc/table/frozencolumnsdoc';
import { VirtualScrollDoc } from '@doc/table/virtualscrolldoc';
import { VirtualScrollLazyDoc } from '@doc/table/virtualscrolllazydoc';
import { ColumnGroupDoc } from '@doc/table/columngroupdoc';
import { SubheaderGroupingDoc } from '@doc/table/subheadergroupingdoc';
import { ExpandableRowGroupDoc } from '@doc/table/expandablerowgroupdoc';
import { RowspanGroupingDoc } from '@doc/table/rowspangroupingdoc';
import { ColumnResizeFitModeDoc } from '@doc/table/columnresizefitmodedoc';
import { ColumnResizeExpandModeDoc } from '@doc/table/columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from '@doc/table/columnresizescrollablemodedoc';
import { ReorderDoc } from '@doc/table/reorderdoc';
import { ColumnToggleDoc } from '@doc/table/columntoggledoc';
import { ExportDoc } from '@doc/table/exportdoc';
import { ContextMenuDoc } from '@doc/table/contextmenudoc';
import { StatefulDoc } from '@doc/table/statefuldoc';
import { CustomersDoc } from '@doc/table/customersdoc';
import { ProductsDoc } from '@doc/table/productsdoc';
import { AccessibilityDoc } from '@doc/table/accessibilitydoc';
import { PreSortDoc } from '@doc/table/presortdoc';
import { RemovableSortDoc } from '@doc/table/removablesortdoc';
import { FilterAdvancedDoc } from '@doc/table/filteradvanceddoc';
import { TableDocModule } from '@doc/table/tabledoc.module';

@Component({
    template: `<app-doc
        docTitle="Angular Table Component"
        header="Table"
        description="Table displays data in tabular format."
        [docs]="docs"
        [apiDocs]="['Table', 'ColumnFilter']"
        themeDocs="table"
    ></app-doc>`,
    standalone: true,
    imports: [TableDocModule],
    styleUrl: './tabledemo.scss',
})
export class TableDemo {
    docs = [
        {
            id: 'import-demo',
            label: 'Import',
            component: ImportDoc,
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc,
        },
        {
            id: 'dynamic',
            label: 'Dynamic Columns',
            component: DynamicDoc,
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc,
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc,
        },
        {
            id: 'gridlines',
            label: 'Grid Lines',
            component: GridlinesDoc,
        },
        {
            id: 'striped',
            label: 'Striped Rows',
            component: StripedDoc,
        },
        {
            id: 'table-style',
            label: 'Conditional Style',
            component: StyleDoc,
        },
        {
            id: 'paginator',
            label: 'Pagination',
            children: [
                {
                    id: 'paginator-basic',
                    label: 'Basic',
                    component: PaginatorBasicDoc,
                },
                {
                    id: 'paginator-programmatic',
                    label: 'Programmatic',
                    component: PaginatorProgrammaticDoc,
                },
            ],
        },
        {
            id: 'sort',
            label: 'Sort',
            children: [
                {
                    id: 'single-column-sort',
                    label: 'Single Column',
                    component: SingleColumnSortDoc,
                },
                {
                    id: 'multiple-columns-sort',
                    label: 'Multiple Columns',
                    component: MultipleColumnsSortDoc,
                },
                {
                    id: 'pre-sort',
                    label: 'Presort',
                    component: PreSortDoc,
                },
                {
                    id: 'removable-sort',
                    label: 'Removable',
                    component: RemovableSortDoc,
                },
            ],
        },
        {
            id: 'filter',
            label: 'Filter',
            children: [
                {
                    id: 'filter-basic',
                    label: 'Basic',
                    component: FilterBasicDoc,
                },
                {
                    id: 'filter-advanced',
                    label: 'Advanced',
                    component: FilterAdvancedDoc,
                },
            ],
        },
        {
            id: 'row-selection',
            label: 'Row Selection',
            children: [
                {
                    id: 'single-selection',
                    label: 'Single',
                    component: SingleSelectionDoc,
                },
                {
                    id: 'multiple-selection',
                    label: 'Multiple',
                    component: MultipleSelectionDoc,
                },
                {
                    id: 'radio-button-selection',
                    label: 'RadioButton',
                    component: RadioButtonSelectionDoc,
                },
                {
                    id: 'checkbox-selection',
                    label: 'Checkbox',
                    component: CheckboxSelectionDoc,
                },
                {
                    id: 'column-selection',
                    label: 'Column',
                    component: ColumnSelectionDoc,
                },
                {
                    id: 'selection-events',
                    label: 'Events',
                    component: SelectionEventsDoc,
                },
            ],
        },
        {
            id: 'row-expansion',
            label: 'Row Expansion',
            component: RowExpansionDoc,
        },
        {
            id: 'Edit',
            label: 'Edit',
            children: [
                {
                    id: 'cell-edit',
                    label: 'Cell',
                    component: CellEditDoc,
                },
                {
                    id: 'row-edit',
                    label: 'Row',
                    component: RowEditDoc,
                },
            ],
        },
        // {
        //     id: 'lazy-load',
        //     label: 'Lazy Load',
        //     component: LazyLoadDoc,
        // },
        {
            id: 'scroll',
            label: 'Scroll',
            children: [
                {
                    id: 'vertical-scroll',
                    label: 'Vertical',
                    component: VerticalScrollDoc,
                },
                {
                    id: 'flex-scroll',
                    label: 'Flexible',
                    component: FlexibleScrollDoc,
                },
                {
                    id: 'horizontal-scroll',
                    label: 'Horizontal',
                    component: HorizontalScrollDoc,
                },
                {
                    id: 'frozen-rows',
                    label: 'Frozen Rows',
                    component: FrozenRowsDoc,
                },
                {
                    id: 'frozen-columns',
                    label: 'Frozen Columns',
                    component: FrozenColumnsDoc,
                },
            ],
        },
        {
            id: 'virtual-scroll',
            label: 'Virtual Scroll',
            children: [
                {
                    id: 'virtual-scroll-basic',
                    label: 'Preload',
                    component: VirtualScrollDoc,
                },
                {
                    id: 'virtual-scroll-lazy',
                    label: 'Lazy',
                    component: VirtualScrollLazyDoc,
                },
            ],
        },
        {
            id: 'column-group',
            label: 'Column Group',
            component: ColumnGroupDoc,
        },
        {
            id: 'row-group',
            label: 'Row Group',
            children: [
                {
                    id: 'subheader',
                    label: 'Subheader',
                    component: SubheaderGroupingDoc,
                },
                {
                    id: 'expand',
                    label: 'Expandable',
                    component: ExpandableRowGroupDoc,
                },
                {
                    id: 'row-span',
                    label: 'RowSpan',
                    component: RowspanGroupingDoc,
                },
            ],
        },
        {
            id: 'column-resize',
            label: 'Column Resize',
            children: [
                {
                    id: 'fit-mode',
                    label: 'Fit Mode',
                    component: ColumnResizeFitModeDoc,
                },
                {
                    id: 'expand-mode',
                    label: 'Expand Mode',
                    component: ColumnResizeExpandModeDoc,
                },
                {
                    id: 'scrollable',
                    label: 'Scrollable',
                    component: ColumnResizeScrollableModeDoc,
                },
            ],
        },
        {
            id: 'reorder',
            label: 'Reorder',
            component: ReorderDoc,
        },
        {
            id: 'column-toggle',
            label: 'Column Toggle',
            component: ColumnToggleDoc,
        },
        {
            id: 'export',
            label: 'Export',
            component: ExportDoc,
        },
        {
            id: 'context-menu',
            label: 'Context Menu',
            component: ContextMenuDoc,
        },
        {
            id: 'stateful',
            label: 'Stateful',
            component: StatefulDoc,
        },
        {
            id: 'samples',
            label: 'Samples',
            children: [
                {
                    id: 'customers',
                    label: 'Customers',
                    component: CustomersDoc,
                },
                {
                    id: 'products',
                    label: 'Products',
                    component: ProductsDoc,
                },
            ],
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc,
        },
    ];
}