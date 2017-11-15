import { Sistema } from '../sistema-novo/sistema.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import 'rxjs/add/operator/toPromise';

import { SistemaService } from '../sistema.service';

@Component({
    moduleId: module.id,
    selector: 'app-sistema',
    templateUrl: './sistema.component.html',
    styleUrls: ['./sistema.component.css'],
    providers: [SistemaService],
    animations: [routerTransition()]
})

@Injectable()
export class SistemaComponent implements OnInit {
    results = null;
    results1: any;
    descricao: string;
    sigla: string;
    emailAtendimento: string;

    pagina = 0;
    qtdPorPagina = 50;

    sistemaForm: FormGroup;

    constructor(
        private _service: SistemaService,
        private router: Router,
        private builder: FormBuilder
    ) { }

    ngOnInit() {
        this.clear();
        this.sistemaForm = this.builder.group({
            descricao: ['', [Validators.maxLength(100)]],
            sigla: ['', [Validators.maxLength(10)]],
            emailAtendimento: ['', [Validators.maxLength(100),
                                    Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.][a-zA-Z.]{2,}')]]
        }, {})
    }

    search() {
        this._service.filtrar(this.descricao, this.sigla, this.emailAtendimento)
            .subscribe(response => {
                this.results = response
                this.results = this.results.data;
                this.popularTabela();
            });
    }

    clear() {
        this.descricao = '';
        this.sigla = '';
        this.emailAtendimento = '';
        this.results = null
    }

    private popularTabela() {
        this.results1 = [];
        for (let i = (this.pagina * this.qtdPorPagina); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
            if (i >= this.results.length) {
                break;
            }
            this.results1.push(this.results[i]);
        }
    }

    private paginar($event: any) {
        this.pagina = $event - 1;
        this.popularTabela();
    }
}
