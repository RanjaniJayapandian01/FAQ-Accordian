// src/app/cart/cart.component.ts
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, OutputEmitterRef, SimpleChanges, ViewChild } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  cartItems: CartItem[] = [];  
  filteredCartItems : CartItem[] = this.cartItems;
  isCartEmpty: boolean = true; // Change this based on your cart state

  @ViewChild('searchText') searchValue: ElementRef;

  @Output()
  changeCartData =new EventEmitter<any>();
  ngOnInit(): void {
    this.filteredCartItems =this.cartItems; // Update filtered items
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
}


