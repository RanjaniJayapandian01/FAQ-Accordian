import { Component, EventEmitter, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ExerciseComponent } from './exercise/exercise.component';
import { Plant } from './models/Plant';
import { CartItem } from './models/CartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Hello World';

  cartItemsFromApp: CartItem[]=[];
  changeCartDataInOrgin=new EventEmitter<any>();
  @ViewChild('exerciseComponent') exerciseComp : ExerciseComponent; // or   @ViewChild(ExerciseComponent) exerciseComp : ExerciseComponent;

  sendDataToCart(cartitem: CartItem){
    // this.cartItemsFromApp.splice(0, this.cartItemsFromApp.length);
    // this.cartItemsFromApp.push(plants);
    this.cartItemsFromApp.push(cartitem);
     console.log("From App component :",this.cartItemsFromApp);
     //this.cartItemsFromApp = [...plants]; // Use spread operator to create a new reference
    }
    RemoveCartItems(newItems : CartItem[]){
      this.cartItemsFromApp=newItems;
      this.changeCartDataInOrgin.emit(this.cartItemsFromApp);
    }
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['cartItemsFromApp']) {
  //     this.cartItemsFromApp = this.cartItemsFromApp; // Update filtered items
  //   }
  // }

  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit Hook is called in app component");

//}

}
