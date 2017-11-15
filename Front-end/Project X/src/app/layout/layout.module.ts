import { NotifyModule } from '../shared/components/notify';
import { NotifyConfig } from './../shared/components/notify/notify.config';
import { NotifyComponent } from './../shared/components/notify/notify.component';
import { SistemaNovoComponent } from '../sistema/sistema-novo/sistema-novo.component';
import { SistemaComponent } from '../sistema/sistema-listar/sistema.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        NotifyModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
