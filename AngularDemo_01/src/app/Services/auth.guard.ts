import { inject } from "@angular/core";
import { AuthenticationService } from "./auth.service"
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { PlantService } from "./plant.service";

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

export const resolve =()=>{
    let ps = inject(PlantService);
    console.log(ps.getResolveData().subscribe(x=> console.log(x)));
    return ps.getResolveData();
}