import { Inject, inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { UserProfile } from "../models/userProfile";
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn:'root'
})
export class AuthenticationService{

    isLogged: boolean = false;
    //userService: UserService= inject(UserService);
    route: Router= inject(Router);
    currentUser: UserProfile;
/**
 *
 */
        constructor(@Inject('USER_TOKEN') private userService: UserService) {
            
            
        }

    LogIn(username: string, password: string): boolean {
        this.currentUser = this.userService.getUserList().find(x=> x.userName === username && x.password === password);
        if(this.currentUser !== undefined){    
            this.isLogged=true;        
            return true;
        }
        else{
            this.isLogged=false;        
            return false;
        }       
    }

    LogOut(){
        this.isLogged=false;        
        this.currentUser=undefined;
    }

    isAuthenticated(){
        return this.isLogged;
    }
    
}
