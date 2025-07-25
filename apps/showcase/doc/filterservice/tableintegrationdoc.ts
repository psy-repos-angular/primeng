import { Car } from '@/domain/car';
import { Code } from '@/domain/code';
import { CarService } from '@/service/carservice';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';

@Component({
    selector: 'filter-service-table-integration-demo',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter.</p>
        </app-docsectiontext>
        <div class="card">
            <p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" [tableStyle]="{ 'min-width': '75rem' }">
                <ng-template pTemplate="header" let-columns>
                    <tr>
                        <th *ngFor="let col of columns" [style.width]="'25%'">{{ col.header }}</th>
                    </tr>
                    <tr>
                        <th *ngFor="let col of columns">
                            <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="'custom-equals'" />
                        </th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-rowData let-columns="columns">
                    <tr [pSelectableRow]="rowData">
                        <td *ngFor="let col of columns">{{ rowData[col.field] }}</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
        <app-code [code]="code" selector="filter-service-table-integration-demo" [extFiles]="extFiles"></app-code>
    `,
    providers: [FilterService]
})
export class TableIntegrationDoc implements OnInit {
    cars: Car[];

    cols: any[];

    matchModeOptions: SelectItem[];

    constructor(
        private carService: CarService,
        private filterService: FilterService,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit() {
        const customFilterName = 'custom-equals';

        this.filterService.register(customFilterName, (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });

        this.cols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' }
        ];

        this.matchModeOptions = [
            { label: 'Custom Equals', value: customFilterName },
            { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
            { label: 'Contains', value: FilterMatchMode.CONTAINS }
        ];

        this.carService.getCarsMedium().then((cars) => {
            this.cars = cars;

            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `<p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" [tableStyle]="{ 'min-width': '75rem' }">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [style.width]="'25%'">{{ col.header }}</th>
        </tr>
        <tr>
            <th *ngFor="let col of columns">
                <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="'custom-equals'" />
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr [pSelectableRow]="rowData">
            <td *ngFor="let col of columns">{{ rowData[col.field] }}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `<div class="card">
    <p-table #dt [columns]="cols" [value]="cars" [paginator]="true" [rows]="10" [tableStyle]="{ 'min-width': '75rem' }">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" [style.width]="'25%'">{{ col.header }}</th>
            </tr>
            <tr>
                <th *ngFor="let col of columns">
                    <p-columnFilter type="text" [field]="col.field" [matchModeOptions]="matchModeOptions" [matchMode]="'custom-equals'" />
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr [pSelectableRow]="rowData">
                <td *ngFor="let col of columns">{{ rowData[col.field] }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { Car } from '@/domain/car';
import { CarService } from '@/service/carservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'filter-service-table-integration-demo',
    templateUrl: './filter-service-table-integration-demo.html',
    standalone: true,
    imports: [TableModule, CommonModule],
    providers: [FilterService, CarService]
})
export class FilterServiceTableIntegrationDemo implements OnInit {
    cars: Car[];

    cols: any[];

    matchModeOptions: SelectItem[];

    constructor(private carService: CarService, private filterService: FilterService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        const customFilterName = 'custom-equals';

        this.filterService.register(customFilterName, (value, filter): boolean => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });

        this.cols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'vin', header: 'Vin' }
        ];

        this.matchModeOptions = [
            { label: 'Custom Equals', value: customFilterName },
            { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
            { label: 'Contains', value: FilterMatchMode.CONTAINS }
        ];

        this.carService.getCarsMedium().then((cars) => {
            this.cars = cars;

            this.cd.markForCheck();
        });
    }
}`,
        service: ['CarService']
    };

    extFiles = [
        {
            path: 'src/domain/product.ts',
            content: `
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`
        },
        {
            path: 'src/domain/car.ts',
            content: `
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`
        }
    ];
}
