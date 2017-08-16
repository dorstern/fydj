import { URLSearchParams, Headers } from "@angular/http";

export default class Utils{
    static SERVER = "http://localhost:8888";
    static SERVER_API = Utils.SERVER+"/api";

    static setHTTPPostParams(params){
        let urlSearchParams = new URLSearchParams();
        for (let key in params){
            urlSearchParams.append(key, params[key]);
        }
        
        return urlSearchParams.toString()
    }

    static setHTTPHeaders(){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        return headers;
    }
}