import { PageHeaderModule } from '../../shared/modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule,
    PageHeaderModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
