import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-delivery',
    template:
    `
     <h3 class="">Shipping Address</h3>
      <p>Please enter your shipping details.</p>
    <div class="container">
        <form>
        <div class="row form-group pb-3">
            <div class="col-md-6 col-lg-5">
                <label>First Name</label>
                <input type="text" name="" id="" class="form-control w-80">
                </div>
                <div class="col-md-6 col-lg-4">
                    <label>Last Name</label>
                    <input type="text" name="" id="" class="form-control w-80">
                </div>
        </div>
        <div class="row form-group pb-3">
            <div class="col-md-6 col-lg-9 ">
                <label>Address</label>        
                <input type="text" name="" id="" class="form-control"> 
            </div>            
        </div>
        <div class="row form-group pb-3">
            <div class="col-md-3 col-lg-3">
                <label>ZipCode</label>
                <input type="text" name="" id="" class="form-control w-80">
                </div>
                <div class="col-md-3 col-lg-3">
                    <label>City</label>
                    <input type="text" name="" id="" class="form-control w-80">
                </div>
                <div class="col-md-3 col-lg-3">
                    <label>State</label>
                    <input type="text" name="" id="" class="form-control w-80">
                </div>
        </div>
        <div class="row form-group pb-3">
            <div class="col-md-6 col-lg-4">
                <label>Country</label>
                <select class="form-control ">
                    <option name="country" value="in">India</option>
                    <option name="country" value="us">US</option>
                    <option name="country" value="uk">UK</option>
                    <option name="country" value="sa">Africa</option>
                </select>
            </div>            
        </div>
        <div class="row form-group pb-3">
            <div class="col-md-6 col-lg-8 ">
                <label>Directions</label>
                <textarea name="" id="" class="form-control"></textarea>
            </div>            
        </div>
        
        </form>
    </div>

      <button class="btn btn-primary back" [routerLink]="'/order/product-summary'">Continue</button>
      
      
      

    `,
    styles:
    `
    `
})
export class DeliveryComponenet{

    

    route: Router =inject(Router);
    ProceedToPayment(){
        const timestamp = Date.now(); // Current timestamp (milliseconds since epoch)
        const randomNum = Math.floor(Math.random() * 1000000); // Random number between 0 and 999,999
        const transactionId= "USER" + timestamp +"-"+ randomNum;

        const obj={

        }

        this.route.navigate(['/order/payment', transactionId], {state: obj});
    }

}