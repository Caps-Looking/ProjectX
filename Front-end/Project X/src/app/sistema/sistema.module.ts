import { KzPaginacaoComponent } from '../shared/components/kz-paginator/kz-paginacao.component';
import { NotifyModule } from '../shared/components/notify';
import { InputComponent } from '../shared/components/input/input.component';
import { SistemaNovoComponent } from './sistema-novo/sistema-novo.component';
import { SistemaComponent } from './sistema-listar/sistema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../shared/modules';
import { SistemaRoutingModule } from './sistema-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SistemaRoutingModule,
    PageHeaderModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyModule
  ],
  declarations: [
      SistemaComponent,
      SistemaNovoComponent,
      InputComponent,
      KzPaginacaoComponent
    ]
})
export class SistemaModule { }
