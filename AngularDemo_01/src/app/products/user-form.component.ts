import { Component } from "@angular/core";
import { User } from "./user";

@Component({
    templateUrl: './user-form.component.html',
    selector: 'user-form'
})
export class UserFormComponent{
    countries=['India', 'United States', 'Africa'];
    model = new User('', '', '');
    submitted = false;
    onSumit(){
        this.submitted=true;
    }
}
