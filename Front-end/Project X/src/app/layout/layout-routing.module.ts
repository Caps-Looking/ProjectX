import { SistemaNovoComponent } from '../sistema/sistema-novo/sistema-novo.component';
import { SistemaComponent } from '../sistema/sistema-listar/sistema.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        loadChildren: '../sistema/sistema.module#SistemaModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
