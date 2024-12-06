import { Component, inject, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
@Component({
    selector: 'app-delivery',
    template:
    `
     <h3 class="">Shipping Address</h3>
      <p>Please enter your shipping details.</p>
        <form (ngSubmit)="PrintForm()" #addressForm="ngForm">
         <div class="container" >
            <div ngModelGroup="addressGroup"  #addrFrmGrp="ngModelGroup">
                <div class="row form-group">
                    <div class="col-md-6 col-lg-6">
                        <label for="fn">First Name</label>
                        <input type="text" id="fn" class="form-control " ngModel name="firstName" required #fn="ngModel">
                        <small class="text-danger" *ngIf="fn.touched && fn.invalid">First Name is Required</small>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <label for="ln">Last Name</label>
                            <input type="text" id="ln" class="form-control " ngModel name="lastName" required #ln="ngModel">
                            <small class="text-danger" *ngIf="ln.touched && ln.invalid">Last Name is Required</small>
                        </div>
                </div>
                <div class="row form-group pb-3">
                    <div class="col-md-6 col-lg-12 ">
                        <label for="addr">Address</label>        
                        <input type="text" id="addr" class="form-control" ngModel name="address"  required #ad="ngModel"> 
                        <small class="text-danger" *ngIf="ad.touched && ad.invalid">Address is Required</small>
                    </div>            
                </div>
                <div class="row form-group pb-3">
                    <div class="col-md-3 col-lg-6">
                        <label for="z">ZipCode</label>
                        <input type="text" id="z" class="form-control " ngModel name="zipcode" required #zip="ngModel">
                        <small class="text-danger" *ngIf="zip.touched && zip.invalid">ZipCode is Required</small>
                        </div>
                        <div class="col-md-3 col-lg-6">
                            <label for="cy">City</label>
                            <input type="text" id="cy" class="form-control " ngModel name="city" required #ct="ngModel">
                            <small class="text-danger" *ngIf="ct.touched && ct.invalid">City is Required</small>
                        </div>
                        <div class="col-md-3 col-lg-6">
                            <label for="se">State</label>
                            <input type="text" id="se" class="form-control " ngModel name="state" required #st="ngModel">
                            <small class="text-danger" *ngIf="st.touched && st.invalid">State is Required</small>
                        </div>
                </div>
                <div class="row form-group pb-3">
                    <div class="col-md-6 col-lg-8">
                        <label for="c" >Country</label>
                        <select class="form-control " id="c" ngModel name="country" required #cty="ngModel">
                            <option  value="in" >India</option>
                            <option  value="us" >US</option>
                            <option  value="uk" >UK</option>
                            <option  value="sa" >Africa</option>
                        </select>
                        <small class="text-danger" *ngIf="cty.touched && cty.invalid">Country is Required</small>
                    </div>            
                </div>
                <div class="row form-group pb-3">
                    <div class="col-md-6 col-lg-8 ">
                        <label for="dir">Directions</label>
                        <textarea id="dir" class="form-control" ngModel name="directions" required></textarea>
                        
                    </div>            
                </div>
            </div>
            <div *ngIf="addrFrmGrp.invalid && addrFrmGrp.touched" [style]="'color: red'">Some of the fields are not filled</div><br>
        <button type="submit" class="btn btn-primary back"  >Continue</button>
        </div>
    </form>
    `,
    styles:
    `
    input.ng-touched.ng-invalid{
        border: 1px solid red;
    }


    `
})
export class DeliveryComponenet{

    
    @ViewChild('addressForm') address: NgForm;
    route: Router =inject(Router);
    ProceedToPayment(){
        const timestamp = Date.now(); // Current timestamp (milliseconds since epoch)
        const randomNum = Math.floor(Math.random() * 1000000); // Random number between 0 and 999,999
        const transactionId= "USER" + timestamp +"-"+ randomNum;

        const obj={

        }

        this.route.navigate(['/order/payment', transactionId], {state: obj});
    }

    PrintForm() {
        //console.log(this.address.value);  // Logs the entire form value
       // console.log(this.address.controls);  // Logs the entire form value
        console.log(this.address.value.addressGroup.city);  // Logs the entire form value


        if (this.address.valid) {
          console.log(this.address);  // Logs the entire form value
          // You can now navigate to the next page after form validation
     this.route.navigate(['/order/product-summary']);
        } else {
          console.log("Form is invalid");
          // Optionally, show validation errors
        }
      }

}