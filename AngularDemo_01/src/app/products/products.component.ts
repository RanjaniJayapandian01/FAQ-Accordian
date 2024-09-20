import { Component } from '@angular/core';
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
  constructor(productService: ProductService) {
    //p1: Product = new Product("Learning Angular", true);
 //   this.products.push(new Product("Learning Angular", true));
  //  this.products.push(new Product("Pro Typescript", false));
   // this.products.push(new Product("ASP.NET", false));      

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


}
export class Product{
  productName!: string;
  available! : boolean;
  constructor( productName : string, available: boolean ) {
   this.productName =productName;
   this.available=available;
  }
}
