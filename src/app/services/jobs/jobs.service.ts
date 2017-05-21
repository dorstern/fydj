import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import Utils from "../../utils/utils";

@Injectable()
export class JobsService{
    private jobsURL = Utils.SERVER_API+"/getJobs.php";

    constructor(private http: Http){}

    getJobs(filters){
        return this.http.get(this.jobsURL);
    }
}