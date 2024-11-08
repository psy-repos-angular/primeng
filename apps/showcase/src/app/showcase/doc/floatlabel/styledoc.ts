import { Component } from '@angular/core';

@Component({
    selector: 'float-label-style-doc',
    template: `
        <app-docsectiontext>
            <p>
                Following is the list of structural style classes, for theming classes visit
                <a href="#" [routerLink]="['/theming']">theming</a> page.
            </p>
        </app-docsectiontext>
        <div class="doc-tablewrapper">
            <table class="doc-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Element</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>p-float-label</td>
                        <td>Float label element.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
})
export class StyleDoc {}