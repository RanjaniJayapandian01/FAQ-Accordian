import { CartItem } from "./CartItem";

export class CheckOutItem{
 cartItem : CartItem;
 isSelected: boolean;
 
 /**
  *
  */
 constructor( c : CartItem, select: boolean) {
    this.cartItem=c;
    this.isSelected=select;
 }
}