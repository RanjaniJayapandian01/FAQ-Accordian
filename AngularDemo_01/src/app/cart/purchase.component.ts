// import { Component } from "@angular/core";
// import { ActivatedRoute } from "@angular/router";

// @Component({
//     selector: 'app-purchase',
//     template:`
// <body>    
    
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
//       <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
//   <div class="container tabs-wrap">
//         <ul class="nav nav-tabs" role="tablist">
//         <li role="presentation" class="active">
//         <a class="nav-link" [routerLink]="['/order']" routerLinkActive="active"  [class.active]="activeTab === 'order'" aria-controls="order" aria-selected="true" role="tab"   data-toggle="tab"  aria-expanded="true"    >Products Preview</a></li>
//         <li >
//         <a class="nav-link" [routerLink]="['/address']" routerLinkActive="active"  [class.active]="activeTab === 'address'" aria-controls="address" aria-selected="true" role="tab"   data-toggle="tab"  aria-expanded="false">Delivery Address</a></li>
//         <li >
//         <a class="nav-link" [routerLink]="['/review']" routerLinkActive="active"  [class.active]="activeTab === 'review'" aria-controls="review" aria-selected="true" role="tab"   data-toggle="tab"  aria-expanded="false">Review & Payment</a></li>
//         </ul>
   
  
  
//   <div class="tab-content">
//       <div *ngIf="activeTab === 'order'" class="tab-pane fade show active" id="order">
//       <h3 class="">Product Preview</h3>
//       <p>Product Preview</p>

//       <table class="table table-dark table-hover">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Product</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Cost</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <th scope="row">1</th>
//             <td><img src="..." class="rounded float-start" alt="...">
//                 Mark</td>
            
//             <td>Otto</td>
//             <td>mdo</td>
//           </tr>
          
//         </tbody>
//       </table>
//       <a class="btn btn-primary continue">Continue</a>
//     </div>
  
//       <div *ngIf="activeTab === 'address'" class="tab-pane fade show active" id="address">
//       <h3 class="">Shipping Address</h3>
//       <p>Please enter your shipping details.</p>
//     <div class="container">
//         <form>
//         <div class="row form-group pb-5">
//             <div class="col-md-6 col-lg-4">
//                 <label>First Name</label>
//                 <input type="text" name="" id="" class="form-control w-50">
//                 </div>
//                 <div class="col-md-6 col-lg-4">
//                     <label>Last Name</label>
//                     <input type="text" name="" id="" class="form-control w-50">
//                 </div>
//         </div>
//         <div class="row form-group pb-5">
//             <div class="col-md-6 col-lg-9 ">
//                 <label>Address</label>        
//                 <input type="text" name="" id="" class="form-control"> <br>
//             </div>            
//         </div>
//         <div class="row form-group pb-5">
//             <div class="col-md-3 col-lg-3">
//                 <label>ZipCode</label>
//                 <input type="text" name="" id="" class="form-control w-50">
//                 </div>
//                 <div class="col-md-3 col-lg-3">
//                     <label>City</label>
//                     <input type="text" name="" id="" class="form-control w-50">
//                 </div>
//                 <div class="col-md-3 col-lg-3">
//                     <label>State</label>
//                     <input type="text" name="" id="" class="form-control w-50">
//                 </div>
//         </div>
//         <div class="row form-group pb-5">
//             <div class="col-md-6 col-lg-4">
//                 <label>Country</label>
//                 <select class="form-control ">
//                     <option name="country" value="in">India</option>
//                     <option name="country" value="us">US</option>
//                     <option name="country" value="uk">UK</option>
//                     <option name="country" value="sa">Africa</option>
//                 </select>
//             </div>            
//         </div>
//         <div class="row form-group pb-5">
//             <div class="col-md-6 col-lg-8 ">
//                 <label>Directions</label>
//                 <textarea name="" id="" class="form-control"></textarea>
//             </div>            
//         </div>
        
//         </form>
//     </div>

//       <a class="btn btn-primary back">Go Back</a>
//       <a class="btn btn-primary continue">Continue</a>
//     </div>
  
//   <div *ngIf="activeTab === 'review'" class="tab-pane fade show active" id="review">
//       <h3 class="">Review &amp; Place Order</h3>
//       <p>Review &amp; Payment Tab</p>
//       <a class="btn btn-primary back">Go Back</a>
//       <a class="btn btn-primary continue">Place Order</a>
//     </div>
//   </div>
    
    
    
//   </div>
          
// </body>
//     `,
//     styles: 
//     `
//     .body{
//                   background-color: azure;
//             display: inline-flex;
//             justify-content: center;
//             gap: 30px;
//     }

//     .purchase-container{
//      background-color: beige;
//             width: 600px;
//             height: 600px;
//             margin: 20px 0px 20px 0px;
//     }

//     .order-container{
//     background-color: bisque;
//             width: 600px;
//             height: 600px;
//             margin: 20px 0px 20px 0px;
//     }

//     .tabs-wrap {
// 	margin-top: 40px;
// }
// .tab-content .tab-pane {
// 	padding: 20px 0;
// }
       
//     `


// })
// export class PurchaseComponent{

//   activeTab: string = 'home';

//   constructor(private route: ActivatedRoute) {
//     // Listen for route changes to update the active tab
//     this.route.url.subscribe(urlSegments => {
//       // Extract the tab name from the route (home, profile, contact)
//       this.activeTab = urlSegments[0]?.path || 'order';
//     });
//   }


// }


import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckOutItem } from '../models/CheckOutItem';
import { PlantService } from '../Services/plant.service';

@Component({
  selector: 'app-purchase',
  template: `
  <div class="container tabs-wrap">
    <!-- Tab navigation -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" [class.active]="activeTab === 'order'">
        <a class="nav-link" [routerLink]="['/order', transactionId]"  routerLinkActive="active" aria-controls="order">Products Preview</a>
      </li>
      <li role="presentation" [class.active]="activeTab === 'address'">
        <a class="nav-link" [routerLink]="['/address', transactionId]" routerLinkActive="active" aria-controls="address">Delivery Address</a>
      </li>
      <li role="presentation" [class.active]="activeTab === 'review'">
        <a class="nav-link" [routerLink]="['/review', transactionId]" routerLinkActive="active" aria-controls="review">Review & Payment</a>
      </li>
    </ul>

    <!-- Tab content -->
    <div class="tab-content">
      <div *ngIf="activeTab === 'order'" class="tab-pane fade show active" id="order">
        <h3>Product Preview</h3>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let items of purchaseList; let i=index">
            <th scope="row">{{i+1}}</th>
            <td><img [src]="items.cartItem.img" class="rounded float-start" alt="...">
                {{items.cartItem.name}}</td>
            
            <td>{{items.cartItem.quantity}}</td>
            <td>{{items.cartItem.quantity * items.cartItem.price }}</td>
          </tr>
          
        </tbody>
      </table>
      <a class="btn btn-primary continue">Continue</a>
      </div>

      <div *ngIf="activeTab === 'address'" class="tab-pane fade show active" id="address">
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

      <a class="btn btn-primary back">Go Back</a>
      <a class="btn btn-primary continue">Continue</a>
      
      </div>

      <div *ngIf="activeTab === 'review'" class="tab-pane fade show active" id="review">
        <h3>Review & Place Order</h3>
        <p>Review & Payment Tab</p>
        <div class="col-lg-8">

                <div class="card bg-white  rounded-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <h5 class="mb-0">Card details</h5>
                      <h4>{{transactionId}}</h4>
                    </div>
                    <p class="small mb-2">Card type</p>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-visa fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i
                        class="fab fa-cc-amex fa-2x me-2"></i></a>
                    <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                    <form class="mt-4">
                      <div data-mdb-input-init class="form-outline form-white mb-4">
                        <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                          placeholder="Cardholder's Name" />
                        <label class="form-label" for="typeName">Cardholder's Name</label>
                      </div>

                      <div data-mdb-input-init class="form-outline form-white mb-4">
                        <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                          placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                        <label class="form-label" for="typeText">Card Number</label>
                      </div>

                      <div class="row mb-4">
                        <div class="col-md-6">
                          <div data-mdb-input-init class="form-outline form-white">
                            <input type="text" id="typeExp" class="form-control form-control-lg"
                              placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7" />
                            <label class="form-label" for="typeExp">Expiration</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div data-mdb-input-init class="form-outline form-white">
                            <input type="password" id="typeText" class="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                            <label class="form-label" for="typeText">Cvv</label>
                          </div>
                        </div>
                      </div>

                    </form>

                    <hr class="my-4">

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Subtotal</p>
                      <p class="mb-2">$4798.00</p>
                    </div>

                    <div class="d-flex justify-content-between">
                      <p class="mb-2">Shipping</p>
                      <p class="mb-2">$20.00</p>
                    </div>

                    <div class="d-flex justify-content-between mb-4">
                      <p class="mb-2">Total(Incl. taxes)</p>
                      <p class="mb-2">$4818.00</p>
                    </div>

                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block btn-lg">
                      <div class="d-flex justify-content-between">
                        <span>$4818.00</span>
                        <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                      </div>
                    </button>

                  </div>
                </div>

              </div>

      </div>
    </div>
  </div>
  `,
  styles: [
    `
      .tabs-wrap {
        margin-top: 40px;
      }
      .tab-content .tab-pane {
        padding: 20px 0;
      }
    `
  ]
})
export class PurchaseComponent {

  activeTab: string = 'order'; // Default tab
  purchaseList : CheckOutItem[];
  transactionId: string=""
  constructor(private route: ActivatedRoute,private service : PlantService) {
    // Use the router's current URL segment to determine the active tab
    this.purchaseList=this.service.getUserOrderedItems();
    console.log(this.purchaseList);
    // this.route.params.subscribe(params => {
    //   this.transactionId = params['transactionId']; // Extract transactionId from route
    //   this.setActiveTabFromUrl(); // Set the active tab based on the route
    // });

    this.transactionId= this.route.snapshot.paramMap.get('transactionId');
    this.setActiveTabFromUrl();
    
  }

  setActiveTabFromUrl() {
    // Determine the active tab based on the URL
    const path = this.route.snapshot.url[0]?.path; // Get the first segment of the URL
    if (path === 'order' || path === 'address' || path === 'review') {
      this.activeTab = path; // Set the active tab to the route's path (order, address, or review)
    }
  }




}
