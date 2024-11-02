import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ProductService } from './products.service';
import { debounceTime, distinctUntilChanged, filter, from, fromEvent, map, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

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
  data :any[] =[];
  array1: any[]=[1,2,3,4,5];
  array2: any[]=["Observables" ,"Observer", "Event Emitter"];
  searchParameter =new FormControl();

  // observable =new Observable(
  //   x=> {
  //     setTimeout(()=>{ x.next(1)}, 1000);
  //     setTimeout(()=>{x.next(2)}, 2000);
  //       setTimeout(()=>{x.next(3)}, 3000);
  //        // setTimeout(()=>{x.error(new Error())}, 4000);
  //           setTimeout(()=>{x.next(5)}, 5000);
  //             setTimeout(()=>{x.next(6)}, 6000);
  //               setTimeout(()=>{x.next(7)}, 7000);
  //               setTimeout(()=>{x.complete()}, 3000);
  //   }
  // );

  //observable=of(this.array1, this.array2, 6, 7, "tring");
  //observable=from(this.array1);
  p : Promise<string[]>=new Promise((resolve, reject)=>{
    resolve(["Ar", "He", "Ne", "Kr" ,"Ze"]);
  })
  observable = from(this.p).pipe(map( x => x.map( g => g.concat('Inert Gas')) ) , map( x=> x.filter(  text => text[1] === 'e' )));
  
  @ViewChild('elementRef') btnElement : ElementRef;

  constructor(productService: ProductService) {

    this.products=productService.getProducts();
    this.prodList=productService.getProductsV2();
    this.searchParameter.valueChanges.pipe(debounceTime(300), filter((x)=> x.length >=3), distinctUntilChanged()).subscribe(x=>{console.log(x)});
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

  getAsyncData(){
    this.observable.subscribe( {next(x : any){ this.data=(x); console.log(this.data);}, 
    error(err: Error){ alert(err.message);} , 
    complete() { alert("The observable sends complete");} });
  }



  ButtonClicked(){
     let cnt: number=0;
      let observableEvent= fromEvent(this.btnElement.nativeElement, 'click').subscribe(data => {
        let childEle= document.createElement('div');
        childEle.innerText = 'Item' + (++cnt);
        document.getElementById("container").appendChild(childEle);            
      });
      
  }

  ngAfterViewInit(){
    this.ButtonClicked();
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
