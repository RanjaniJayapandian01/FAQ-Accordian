import { Component, ElementRef, Input } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService]
})


export class ProductsComponent {
  public productArray = ["Books", "Home Appliances", "Electronics"];
  public  products: Product[] = [];
  showMessage : boolean= true;
  productAvailable : boolean =true;
  imageUrl: string= "/assets/cockapoo-puppy-dogs.jpg";
  message: string = 'Hello, this message is conditionally displayed!';
  isValid : boolean =false;
  defaulttext? : string = "Type here...";
  prodList : any;
  searchText: string="Product1";

  
  arrayOfElements: string[]=["ABC"];
  messageForNOCtest: string;
  toDestroy: boolean = false;
  constructor(productService: ProductService) {

    this.products=productService.getProducts();
    this.prodList=productService.getProductsV2();
  }
  get styles() {
    return {
      'background-color':  'green',
      'color': 'black',
      'margin': '80px'
    };
  }
  OnClickEvent($event : Event){
    console.log("Submit button invoked successfully");
  }
  updateSearchText(event : any){
    console.log(event);
    this.searchText=event.target.value;
  }

  ChangeInputByClick(val : HTMLInputElement){

    this.arrayOfElements.push(val.value);
    this.messageForNOCtest=val.value;
    console.log("Product Component input val:",  this.messageForNOCtest);
  }
  ChangeInputByHardcodedValue(){
    this.messageForNOCtest='test';
  }

  ToRemoveComponent(){
    this.toDestroy=!this.toDestroy;
  }

}
export class Product{
  productName!: string;
  available! : boolean;
  constructor( productName : string, available: boolean ) {
   this.productName =productName;
   this.available=available;
  }
}
