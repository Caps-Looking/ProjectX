import { LayoutComponent } from '../../layout/layout.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sistema } from './sistema.model';
import { Http, Response } from '@angular/http';
import { Compiler, Component, Injectable, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { SistemaService } from '../sistema.service';

@Component({
    moduleId: module.id,
    selector: 'app-sistema-novo',
    templateUrl: './sistema-novo.component.html',
    styleUrls: ['./sistema-novo.component.css'],
    providers: [SistemaService],
    animations: [routerTransition()]
})

@Injectable()
export class SistemaNovoComponent implements OnInit {
    sistema: Sistema = {
        descricao: '',
        sigla: '',
        emailAtendimento: '',
        url: ''
    };

    sistemaForm: FormGroup;

    constructor(
        private _service: SistemaService,
        private router: Router,
        private builder: FormBuilder,
        private layout: LayoutComponent
    ) { }

    ngOnInit() {
        this.sistemaForm = this.builder.group({
            descricao: ['', [Validators.required, Validators.maxLength(100)]],
            sigla: ['', [Validators.required, Validators.maxLength(10)]],
            emailAtendimento: ['', [Validators.maxLength(100),
                                    Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.][a-zA-Z.]{2,}')]],
            url:  ['', [Validators.maxLength(50)]],
        }, {})
    }

    save(sistema: Sistema) {
        this._service.salvar(sistema)
            .subscribe(response => {
                this.layout.addMessages(response.message)
            });
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err)
    }
}
