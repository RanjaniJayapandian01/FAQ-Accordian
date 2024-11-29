import { Component, Inject, inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../Services/user.service";
import { UserRequest } from "../models/UserRequest";

@Component({
    selector:'app-contact',
    template:
    `
    <div class="container m-6 contact">
    <div class="row ">
    <div class="col-12 col-lg-12  px-3 py-3 pt-6">
        <h3><b>Contact Form</b></h3>

        <form class="" [formGroup]="ContactForm">
            <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="" id="email" class="form-control"   formControlName="ReqEmail">
            </div>
            <div class="form-group">
            <label for="userName">User Name</label>
            <input type="text" name="" id="userName" class="form-control" formControlName="ReqUserName">
            </div>
            <div class="form-group">
            <label for="message">Message</label>
            <textarea name="" id="message" class="form-control"  formControlName="ReqMessage" ></textarea>
            </div>
            <div class= "py-4">
                <button class="btn btn-success" (click)="SendUserRequest()" >Send  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></button>
            </div>
        </form>
    </div>
    </div>
</div>

    `,
    styles:`
    
    .contact{

    }
    
    `
})
export class ContactComponent{

    ContactForm: FormGroup;
    /**
     *
     */

    //userService: UserService= inject(UserService);
    req: UserRequest;
    constructor(@Inject('USER_TOKEN') private userService: UserService) {
        this.ContactForm=new FormGroup({
            ReqEmail: new FormControl('', Validators.required),
            ReqUserName: new FormControl('', Validators.required),
            ReqMessage: new FormControl('', Validators.required),
        })
        
    }
    SendUserRequest(){
        console.log(this.ContactForm.controls['ReqEmail'].value);
        this.req = new UserRequest(this.ContactForm.controls['ReqEmail'].value, this.ContactForm.controls['ReqUserName'].value, this.ContactForm.controls['ReqMessage'].value);
        this.userService.addUserRequest(this.req);
    }
}