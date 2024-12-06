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


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckOutItem } from '../models/CheckOutItem';
import { PlantService } from '../Services/plant.service';

@Component({
  selector: 'app-purchase',
  template: `
  
  <div class="purchase">
  <h4>Check Out</h4>
  
    <router-outlet></router-outlet> <!-- Child components will be rendered here -->
  
  </div>
  `,
  styles: [
    `
    .purchase{
            padding: 20px 40px;
    background-color: #fbfcfc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
      .tabs-wrap {
        margin-top: 40px;
      }
      .tab-content .tab-pane {
        padding: 20px 0;
      }
    `
  ]
})export class PurchaseComponent  {

//   activeTab: string = 'order'; // Default tab
//  // purchaseList: CheckOutItem[] = [];
//   transactionId: string = "";

//   constructor(private route: ActivatedRoute, private service: PlantService, private router: Router) { }

//   ngOnInit(): void {
//     // Fetch the order items and transactionId
//     this.purchaseList = this.service.getUserOrderedItems();
//     this.transactionId = this.route.snapshot.paramMap.get('transactionId') || "";

//     // Listen to route changes and update the active tab
//     this.router.events.subscribe(() => {
//       this.setActiveTabFromUrl();
//     });
//   }

//   setActiveTabFromUrl() {
//     const path = this.route.snapshot.url[0]?.path; // Get the first segment of the URL
//     if (path === 'product-summary' || path === 'delivery-address' || path === 'payment') {
//       // Set the active tab based on the current URL
//       this.activeTab = path === 'product-summary' ? 'order' : path === 'delivery-address' ? 'address' : 'review';
//     }
//   }
}