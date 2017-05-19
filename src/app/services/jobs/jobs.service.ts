import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class JobsService{
    private _jobURL = "fydj-server/api/getJobs.php";

    constructor(private _http: Http){}

    getJobs(filters){
        return this._http.post(this._jobURL, filters);
    }
}