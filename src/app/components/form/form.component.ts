import { Component } from '@angular/core';

@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    host: {'class': 'margin-auto full-width'}
})
export class FormComponent{
    companies = "";
    jobTitle = "";

    constructor(){}

    submitRequest(){
        console.log("I'm a: " + this.jobTitle);
        console.log("Companies: "+this.companies);
    }
}