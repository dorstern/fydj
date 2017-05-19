import { Component } from '@angular/core';
import { JobsService } from '../../services/jobs/jobs.service';

@Component({
    selector: 'main-form',
    templateUrl: './form.component.html',
    host: {'class': 'margin-auto full-width'},
    providers: [JobsService]
})
export class FormComponent{
    private _companies;
    private _jobTitle;

    constructor(private _jobsService: JobsService){
        this._jobTitle = 0;
    }

    findJobs(){
        let jobs = this._jobsService.getJobs(this.getFormData());
        this.showJobsResults(jobs);
    }

    getFormData(){
        let filters = {
            companies: this._companies,
            jobtitle: this._jobTitle
        };

        return filters;
    }

    showJobsResults(jobs){
        console.log(jobs);
    }
}