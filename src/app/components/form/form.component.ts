import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    host: {'class': 'margin-auto full-width'},
    providers: [JobsService]
})
export class FormComponent{
    private companies;
    private jobTitle;

    constructor(private jobsService: JobsService){
        this.jobTitle = 0;
    }

    findJobs(){
        this.jobsService.getJobs(this.getFormData()).subscribe(
            (data) => this.showJobsResults(data)   
        );
    }

    getFormData(){
        let params = {
            "companies": this.companies,
            "jobtitle": this.jobTitle
        };

        return params;
    }

    showJobsResults(jobs){
        console.log(jobs);
    }
}