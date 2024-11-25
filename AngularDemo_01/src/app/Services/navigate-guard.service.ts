import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, Data, GuardResult, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IDataService } from "../interface/data.service.interface";
import { PlantService } from "./plant.service";



export interface IDeactivateComponent{
    canExit() : boolean;
}

@Injectable({
    providedIn: 'root'  // Make the service available application-wide
  })
export class NavigateGuard implements CanDeactivate<IDeactivateComponent>{

    constructor(private dataService: PlantService) {}  // Inject via the interface

    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | Observable<boolean>| Promise<boolean> {
        console.log("call for canDeactivate");
        return component.canExit();
    }

}