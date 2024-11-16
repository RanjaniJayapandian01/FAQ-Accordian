// src/app/cart/cart.component.ts
import { Component, ElementRef, EventEmitter, inject, Input, OnInit, Output, OutputEmitterRef, SimpleChanges, ViewChild } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { PlantService } from '../Services/plant.service';
import { CheckOutItem } from '../models/CheckOutItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: []
})
export class CartComponent implements OnInit {
  @Input()
  cartItems: CartItem[] = [];  
  filteredCartItems : CartItem[] = this.cartItems;
  isCartEmpty: boolean = true; // Change this based on your cart state

  @ViewChild('searchText') searchValue: ElementRef;

  @Output()
  changeCartData =new EventEmitter<any>();
  plantService: PlantService = inject(PlantService);

  purchaseList : CheckOutItem[]=[];
/**
 *
 */
constructor(private router : Router) {
  
  
}
  ngOnInit(): void {
    //this.filteredCartItems =this.cartItems; // Update filtered items
    this.filteredCartItems= this.plantService.getUserCartItems();
    console.log(this.filteredCartItems);

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartItems']) {
      this.filteredCartItems = this.cartItems; // Update filtered items
    }
  }
  findCartItems(){
    console.log(this.cartItems);
  }
  calculateTotal(item: CartItem): number {
    const discountAmount = (item.price * item.discount) / 100;
    return (item.price - discountAmount) * item.quantity;
  }
  removeItem(id: number): void {
    console.log(this.cartItems);
    // Update cartItems
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    // Update filteredCartItems to reflect the change // this.filteredCartItems = this.cartItems; 
    this.filteredCartItems = [...this.cartItems]; 
    console.log("From Cart remove",this.cartItems);
    this.changeCartData.emit(this.cartItems);
  }
  // UpdateTableData(input: HTMLInputElement){
  //   console.log(input.value);
  //   if(input.value.length>0){
  //     this.filteredCartItems=this.cartItems.filter(plant => plant.name.toLowerCase().includes(input.value.toLowerCase()));
  //   }
  //   else{
  //     this.filteredCartItems= [...this.cartItems]; 
  //   }
  // }

  UpdateTableData(){

    if(this.searchValue.nativeElement.value.length>0){
      this.filteredCartItems=this.cartItems.filter(plant => plant.name.toLowerCase().includes(this.searchValue.nativeElement.value.toLowerCase()));
    }
    else{
      this.filteredCartItems= [...this.cartItems]; 
    }
  }

  AddToPurchaseList(item: CartItem){ 
    console.log(item)   ;
    const p = this.purchaseList.find(x=> x.cartItem.id===item.id);
      if(p){
      p.isSelected = !p.isSelected;
      }
    else{
      const c=new CheckOutItem( item,true);
    this.purchaseList.push(c);
    }
    console.log(this.purchaseList);
  }

  
  
  GoToCheckOut(){
    const timestamp = Date.now(); // Current timestamp (milliseconds since epoch)
    const randomNum = Math.floor(Math.random() * 1000000); // Random number between 0 and 999,999
    const transId= "USER" + timestamp +"-"+ randomNum;
    this.plantService.setUserOrderedItems(this.purchaseList);
    this.router.navigateByUrl('/order/'+transId);
  }





}


