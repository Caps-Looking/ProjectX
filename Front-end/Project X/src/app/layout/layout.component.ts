import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    messages: any[] = []
    resultado: any

    constructor(public router: Router) { }

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/sistema']);
        }
    }

    addMessages(messages: string): void {
        this.resultado = {
            type: 'success',
            details: messages,
            timeout: (10000 * 3000)
        }

        this.messages.push({
            type: 'success',
            details: messages,
            timeout: (10000 * 3000)
        })
    }
}
