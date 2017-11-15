import { Observable } from 'rxjs/Rx';
import { Sistema } from './sistema-novo/sistema.model';
import { Injectable } from '@angular/core';
import { toPromise } from 'rxjs/operator/toPromise';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

@Injectable()
export class SistemaService {
    private url = 'http://localhost:8080/api/sistema';
    private headers: Headers = new Headers({'Content-type': 'application/json'});

    constructor(private http: Http) { }

    public filtrar(descricao: string, sigla: string, emailAtendimento: string): Observable<Sistema []> {
        const url = `${this.url}/filter?descricao=${descricao}&sigla=${sigla}&emailAtendimento=${emailAtendimento}`;
        return this.http.get(url)
            .map(response => response.json());
    }

    public salvar(sistema: Sistema): Observable<any> {
        const headers = new Headers({'Content-Type': 'application/json'})
        const options = new RequestOptions({headers: headers})
        const body = JSON.stringify(sistema);

        return this.http.post(`${this.url}/`, body, options)
            .map(response => response.json());
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err)
    }
}
