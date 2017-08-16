import { Component, OnInit } from '@angular/core';
import { OpenPositionsService } from '../../services/positions/positions.service';

@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    host: {'class': 'margin-auto full-width'},
    providers: [OpenPositionsService]
})
export class FormComponent implements OnInit{
    private companies;
    private positionTitle;
    private companiesList;
    private data = [];

    constructor(private openPositionService: OpenPositionsService){
        this.positionTitle = 0;
        this.companies = "";
    }

    findOpenPositions(){
        this.openPositionService.getOpenPositions(this.getFormData())
            .subscribe(data => this.showOpenPositionsResults(data));
    }

    getFormData(){
        let params = {
            "companies": this.companies,
            "position_title": this.positionTitle
        };

        return params;
    }

    showOpenPositionsResults(data){
        console.log(data);
    }

    ngOnInit(){
        this.companiesList = ["Wix", "Google", "Fiverr", "Facebook"];
    }
}