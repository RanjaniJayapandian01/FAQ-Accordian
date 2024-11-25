import { Component } from "@angular/core";
import { User } from "./user";
import { IDeactivateComponent } from "../Services/navigate-guard.service";


@Component({
    templateUrl: './user-form.component.html',
    selector: 'user-form'
})
export class UserFormComponent implements IDeactivateComponent{
    
    countries=['India', 'United States', 'Africa'];
    model = new User('', '', '','');
    submitted = false;
    onSubmit(){
        this.submitted=true;
    }

    canExit() {
        console.log(`${this.model.firstName} ${this.model.lastName} ${this.model.email} ${this.model.country}`);
        
        // Check if any field has a value and the form is not submitted
        if ((this.model.firstName || this.model.lastName || this.model.email || this.model.country) && !this.submitted) {
          // This should show a confirmation dialog to the user before navigation
          return confirm('You have unsaved changes. Do you want to navigate away?');
        }
        return true; // If no unsaved changes, navigation is allowed
      }
      
}
