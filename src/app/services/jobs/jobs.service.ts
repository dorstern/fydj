import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import Utils from "../../utils/utils";

@Injectable()
export class JobsService{
    private jobsURL = Utils.SERVER_API+"/getOpenPositions.php";

    constructor(private http: Http){}

    getJobs(params){
        let data = Utils.setHTTPPostParams(params);
        let headers = Utils.setHTTPHeaders();
        return this.http.post(this.jobsURL, data, { headers: headers } );
    }
}