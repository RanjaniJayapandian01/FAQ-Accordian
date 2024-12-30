import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class LoggerService{

    private _http: HttpClient= inject(HttpClient);
    logActions(action: string){
        console.log(action);
    }

    logError(data: {errorMsg: string, errorCode: number, timestamp: Date }){
        this._http.post('https://my-awesome-c993d-default-rtdb.firebaseio.com/logs.json', data).subscribe(
            (data)=>{console.log(data);}
        );
    }

    fetchError(){

        return this._http.get('https://my-awesome-c993d-default-rtdb.firebaseio.com/logs.json').subscribe(
            (data)=>{console.log(data);}
        );
    }
}