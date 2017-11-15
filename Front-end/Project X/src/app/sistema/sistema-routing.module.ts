import { SistemaNovoComponent } from './sistema-novo/sistema-novo.component';
import { SistemaComponent } from './sistema-listar/sistema.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',
        children: [{
            path: 'sistema', component: SistemaComponent
        }, {
            path: 'sistema/novo', component: SistemaNovoComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemaRoutingModule { }
