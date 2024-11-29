import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CheckOutItem } from "../models/CheckOutItem";
import { PlantService } from "../Services/plant.service";
import { CartItem } from "../models/CartItem";

@Component({
    selector: 'app-prodSummary',
    template:
    `

     <h3>Product Preview</h3>

<table class="table table-bordered">
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
            <td><img [src]="items.cartItem.img" class="rounded float-start prodimage" alt="...">
                <h5>{{items.cartItem.name}}</h5></td>            
            <td>{{items.cartItem.quantity}}</td>
            <td>{{items.cartItem.quantity * items.cartItem.price }}</td>
          </tr>
          
    <tr>
      <th scope="row"></th>
      <td colspan="2">Total</td>
      <td>{{getTotalCost()| currency}}</td>
    </tr>


        </tbody>
      </table>
      <button class="btn btn-primary continue" [routerLink]="'/order/delivery-address'" >Back</button>
      <button class="btn btn-primary continue" (click)="ProceedToPayment()">Continue</button>


    `,
    styles:
    `
    table{
    
    border: 1px solid black;
    }
    .prodimage{
    
    width: 150px;
    height: 150px;
    object-fit: cover;

    }
    `
})
export class ProductSummaryComponent{
    purchaseList: CheckOutItem[] = [];
    constructor(private route: ActivatedRoute, private service: PlantService, private router: Router) { }

  ngOnInit(): void {
    // Fetch the order items and transactionId
    console.log("Hey");
    this.purchaseList = this.service.getUserOrderedItems();
  }

  getTotalCost(){
    return this.purchaseList.reduce((total, item)=> total + item.cartItem.quantity * (item.cartItem.price- (item.cartItem.price * item.cartItem.discount/100)), 0);
  }

  getTotalDiscount(){
    return this.purchaseList.reduce((total, item)=> total + item.cartItem.quantity * (item.cartItem.price * item.cartItem.discount/100), 0);
  }



  changeQuantity(item: CartItem, changeByVal: number){
    let tempCart= this.purchaseList.find(x=> x.cartItem.id===item.id);
      if(tempCart){
        tempCart.cartItem.quantity+=1;
      }
  }
    ProceedToPayment(){
        const timestamp = Date.now(); // Current timestamp (milliseconds since epoch)
        const randomNum = Math.floor(Math.random() * 1000000); // Random number between 0 and 999,999
        const transactionId= "USER" + timestamp +"-"+ randomNum;
        const obj= {items: this.purchaseList.length, total: this.getTotalCost(), discountPrice: this.getTotalDiscount(), shippingCharge: 20 };

        this.router.navigate(['/order/payment', transactionId], {state: obj});
    }
}