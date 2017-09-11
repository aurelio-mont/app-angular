import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    public title: string
    constructor() {
        this.title = 'Ingreso al sistema'
    }
    ngOnInit() {
        console.log('Componente login cargado')
    }
}
