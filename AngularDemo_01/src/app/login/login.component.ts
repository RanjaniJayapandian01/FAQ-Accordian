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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
     form: FormGroup;
     /**
      *
      */
     constructor(fb : FormBuilder) {
      this.form= fb.group({
        username_var1 : ['', Validators.required],
        password: ['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace]) ]
      })
     }

    Login(){
      console.log("Login method invoked");
      console.log(this.form.value);
    }
}
