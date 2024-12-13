import { FormControl } from "@angular/forms";


export class CustomValidator{

    static notSpaceAllowed (control: FormControl) {
        if(control.value!== null && control.value.indexOf(" ") !==-1 ){
            return {notSpaceAllowed: true};
        }
        return null;
    }

}