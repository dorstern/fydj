import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import Utils from "../../utils/utils";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OpenPositionsService{
    private openPositionsURL = Utils.SERVER_API+"/getOpenPositions.php";

    constructor(private http: Http){}

    getOpenPositions(params){
        let data = Utils.setHTTPPostParams(params);
        let headers = Utils.setHTTPHeaders();
        return this.http.post(this.openPositionsURL, data, { headers: headers } )
            .map((response:Response) => response.json())
            .catch(this._errorHandler);
    }

    _errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server error");
    }
    
}