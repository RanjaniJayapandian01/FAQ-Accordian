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

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password-validator.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService]
})
export class LoginComponent {
     form: FormGroup;
     /**
      *
      */
     constructor(fb : FormBuilder, private _loginservice : LoginService) {
      this.form= fb.group({
        username_var1 : ['', Validators.required],
        password: ['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace]) ]
      })
     }

    Login(){
      console.log("Login method invoked");
      console.log(this.form.value);
        var result=this._loginservice.login(this.form.controls['username_var1'].value, this.form.controls['password'].value)
      if(!result){
        this.form.controls['password'].setErrors({invalidLogin: true});
      }
    }

}
