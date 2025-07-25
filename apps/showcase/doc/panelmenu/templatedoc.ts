import { Code } from '@/domain/code';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'template-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>PanelMenu requires a collection of menuitems as its <i>model</i>.</p>
        </app-docsectiontext>
        <div class="card flex flex-col items-center">
            <p-panelmenu [model]="items" class="w-full md:w-80">
                <ng-template #item let-item>
                    <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
                        <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
                        <span class="ml-2">{{ item.label }}</span>
                        <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                        <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    </a>
                </ng-template>
            </p-panelmenu>
        </div>
        <app-code [code]="code" selector="panel-menu-template-demo"></app-code>
    `
})
export class TemplateDoc implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Mail',
                icon: 'pi pi-envelope',
                badge: '5',
                items: [
                    {
                        label: 'Compose',
                        icon: 'pi pi-file-edit',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Inbox',
                        icon: 'pi pi-inbox',
                        badge: '5'
                    },
                    {
                        label: 'Sent',
                        icon: 'pi pi-send',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'Trash',
                        icon: 'pi pi-trash',
                        shortcut: '⌘+T'
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-chart-bar',
                shortcut: '⌘+R',
                items: [
                    {
                        label: 'Sales',
                        icon: 'pi pi-chart-line',
                        badge: '3'
                    },
                    {
                        label: 'Products',
                        icon: 'pi pi-list',
                        badge: '6'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'pi pi-user',
                shortcut: '⌘+W',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Privacy',
                        icon: 'pi pi-shield',
                        shortcut: '⌘+P'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }

    code: Code = {
        basic: `<p-panelmenu [model]="items" class="w-full md:w-80">
    <ng-template #item let-item>
        <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
            <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
            <span class="ml-2">
                {{ item.label }}
            </span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
            bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
</p-panelmenu>`,

        html: `<div class="card flex flex-col items-center">
    <p-panelmenu [model]="items" class="w-full md:w-80">
        <ng-template #item let-item>
            <a pRipple class="flex items-center px-4 py-2 cursor-pointer group">
                <i [class]="item.icon + ' text-primary group-hover:text-inherit'"></i>
                <span class="ml-2">
                    {{ item.label }}
                </span>
                <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
                <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded
                 bg-emphasis text-muted-color text-xs p-1">
                    {{ item.shortcut }}
                </span>
            </a>
        </ng-template>
    </p-panelmenu>
</div>`,

        typescript: `import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'panel-menu-template-demo',
    templateUrl: './panel-menu-template-demo.html',
    standalone: true,
    imports: [PanelMenu, BadgeModule, Ripple, CommonModule]
})
export class PanelMenuTemplateDemo implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Mail',
                icon: 'pi pi-envelope',
                badge: '5',
                items: [
                    {
                        label: 'Compose',
                        icon: 'pi pi-file-edit',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Inbox',
                        icon: 'pi pi-inbox',
                        badge: '5'
                    },
                    {
                        label: 'Sent',
                        icon: 'pi pi-send',
                        shortcut: '⌘+S'
                    },
                    {
                        label: 'Trash',
                        icon: 'pi pi-trash',
                        shortcut: '⌘+T'
                    }
                ]
            },
            {
                label: 'Reports',
                icon: 'pi pi-chart-bar',
                shortcut: '⌘+R',
                items: [
                    {
                        label: 'Sales',
                        icon: 'pi pi-chart-line',
                        badge: '3'
                    },
                    {
                        label: 'Products',
                        icon: 'pi pi-list',
                        badge: '6'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'pi pi-user',
                shortcut: '⌘+W',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Privacy',
                        icon: 'pi pi-shield',
                        shortcut: '⌘+P'
                    }
                ]
            }
        ];
    }

    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }

}`
    };
}
