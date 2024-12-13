import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThumbPosition } from '@angular/material/slider/testing';
import { last } from 'rxjs';
import { CustomValidator } from '../CustomValidator/notSpaceAllowed.validator';
import { UniqueValidator } from '../CustomValidator/unique.validator';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrl: './eventform.component.css'
})
export class EventformComponent {


  /**
   *
   */
  constructor(@Inject('USER_TOKEN') private userService: UserService) {
    
    
  }
  //snackbar You will receive a confirmation email once your registration has been processed.

  status: string="";
  reactiveForm: FormGroup;
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(null, [Validators.required, CustomValidator.notSpaceAllowed]),
      lastName:  new FormControl(null, Validators.required),
      username: new FormControl(null,[Validators.required], [UniqueValidator.FindUniqueUser(this.userService)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      //contact: new FormControl(null, Validators.required),
      contact : new FormArray([], Validators.required),
      addressgrp: new FormGroup({
        address: new FormControl(null, Validators.required),
        country: new FormControl('in', Validators.required),
        state: new FormControl(null, Validators.required),
        zip: new FormControl(null, Validators.required),
      }),
      products: new FormArray([], Validators.required),
      ackevent: new FormControl(null, Validators.required),
      permitInfo: new FormControl(null),

    });
       // Adding a default contact number to the FormArray
   this.addContactNumbers();
   this.addGoods();


   this.reactiveForm.get('firstName').valueChanges.subscribe((x)=>{
      console.log(x);
   })
   this.reactiveForm.valueChanges.subscribe((x)=>{
    console.log(x);
   })
   this.reactiveForm.get('username').statusChanges.subscribe((x)=>{
    console.log(x);
    this.status=x;
   })

  }

  get productsGrp(){
    return ((this.reactiveForm.get('products')) as FormArray);
  }
  get contactNumbers(){
    return (this.reactiveForm.get('contact') as FormArray);
  }
  addContactNumbers(){
    const contactGroup=new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      phoneType: new FormControl('mobile', Validators.required)
    })
        // <FormArray>this.reactiveForm.get('contact').push();
    return this.contactNumbers.push(contactGroup);
  }
  
  // Function to remove a contact number input
  removeContactNumber(index: number) {
    this.contactNumbers.removeAt(index);
  }

  addGoods(){
    const goodGrp= new FormGroup({
      item: new FormControl('pot', Validators.required),
      size: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required)
    })

    return this.productsGrp.push(goodGrp);
  }

  removeGoods(index: number){
    this.productsGrp.removeAt(index);
  }


  onSubmit(){
    console.log(this.reactiveForm);
  }

}
