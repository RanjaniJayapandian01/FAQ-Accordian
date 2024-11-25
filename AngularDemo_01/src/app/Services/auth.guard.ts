import { inject } from "@angular/core";
import { AuthenticationService } from "./auth.service"
import { Router } from "@angular/router";

export const CanActivateKey= () =>{
    const authService = inject(AuthenticationService);
    const route =inject(Router);
    if(authService.isAuthenticated()){
        return true;
    }
    else{
        route.navigate(['/login']);
        return false;
    }
}

export const CanActivateSubKey = ()=>{
    console.log('CanActivateSubKey triggered');
    return CanActivateKey;
}