// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//     form=new FormGroup({
//       username_var1: new FormControl('', Validators.required),
//       password: new FormControl('', Validators.required)
//     })

//     Login(){
//       console.log("Login method invoked")
//     }
// }

import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator.component';
import { LoginService } from './login.service';
import { AuthenticationService } from '../../Services/auth.service';
import { SnackBarService } from '../../Services/snackBar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeactivateComponent } from '../../Services/navigate-guard.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent implements IDeactivateComponent{
     form: FormGroup;
     authservice: AuthenticationService=inject(AuthenticationService);
     snackBar: SnackBarService =inject(SnackBarService);
     route: Router= inject(Router);
     activatedRoute: ActivatedRoute =inject(ActivatedRoute);

     /**
      *
      */
     
     constructor(fb : FormBuilder, private _loginservice : LoginService, @Inject('USER_TOKEN') private userService: UserService) {
      this.form= fb.group({
        username_var1 : ['', Validators.required],
        password: ['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace]) ]
      })
     }
  canExit(): boolean {        
        // Check if any field has a value and the form is not submitted
        if (this.form.dirty) {
          // This should show a confirmation dialog to the user before navigation
          return confirm('Do you want to navigate away?');
        }
        return true; // If no unsaved changes, navigation is allowed
  }

     ngOnInit(){
      let userstatus;
      this.activatedRoute.queryParamMap.subscribe(x=>  userstatus=x.get('logout'));
      if(userstatus !==undefined){
          if(this.authservice.isAuthenticated()){
            this.authservice.LogOut();
            this.snackBar.openSnackBar('You have Logged out in successfully', '');
            this.route.navigate(['/login']);
          }
      }

     }

    Login(){
      //V1
      // console.log("Login method invoked");
      // console.log(this.form.value);
      //   var result=this._loginservice.login(this.form.controls['username_var1'].value, this.form.controls['password'].value)
      // if(!result){
      //   this.form.controls['password'].setErrors({invalidLogin: true});
      // }
      var result= this.authservice.LogIn(this.form.controls['username_var1'].value, this.form.controls['password'].value);
      if(!result){
              this.form.controls['password'].setErrors({invalidLogin: true});
              this.snackBar.openSnackBar('Unable to login. Please check your credentials.', 'Close');
              this.route.navigate(['/login']);
      }
      else{
        this.snackBar.openSnackBar('You have logged in successfully', '');
        this.userService.setCurrentUser(this.form.controls['username_var1'].value);
        this.route.navigate(['/home']);
      }



    }



}
