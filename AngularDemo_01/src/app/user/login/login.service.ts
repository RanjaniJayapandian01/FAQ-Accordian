import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable()
export class LoginService{
    login(username : string, password : string){
        if(username === 'rj' && password === "*123_abc"){
            return true;
        }
        else{
            return false;
        }
    }
}