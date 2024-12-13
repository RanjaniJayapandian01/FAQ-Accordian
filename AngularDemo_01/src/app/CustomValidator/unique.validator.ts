import { Inject } from "@angular/core";
import { UserService } from "../Services/user.service";
import { Observable, of } from "rxjs";
import { FormControl } from "@angular/forms";
import { map, catchError } from "rxjs/operators";

export class UniqueValidator {

  // Static method that requires userService as an argument
  static FindUniqueUser(userService: UserService) {
    return (control: FormControl): Observable<any> => {
      return new Observable(obs => {
        // Simulating async behavior using setTimeout
        setTimeout(() => {
          // Use the injected userService inside the method
          userService.getUserList().find(x => x.userName === control.value)
            ? obs.next(null)  // If  user is found, return null (valid)
            : obs.next({ usernameTaken: true });  // If a user is not found, return error object

          obs.complete();
        }, 1000);  // Simulate async delay
      });
    };
  }
}
