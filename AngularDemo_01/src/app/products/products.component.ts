import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { ProductService } from './products.service';
import { AsyncSubject, BehaviorSubject, debounceTime, distinctUntilChanged, filter, from, fromEvent, interval, map, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';
import { GitHubService, GitHubUser } from '../Services/github.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductService, GitHubService]
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


    /* Observables Vs Subject
  // 1. Unicast vs multicast
  
  // ngOnInit(){
  // const obs=new Observable( (observer) => { observer.next(Math.random())});
  // const subject = new Subject();
  //   obs.subscribe( (x) =>  console.log('This is observable call-1',x));
  //   obs.subscribe( (a) =>  console.log('This is observable call-2',a));

  //   subject.subscribe( (y)=> console.log('This is subscribe call-1',y));
  //   subject.subscribe( (z)=> console.log('This is subscribe call-2',z));

  //   subject.next(Math.random());

  // }

 // 2. Subject as both data provider and data consumer
 
 //ngOnInit(){
    // let data = ajax('https://randomuser.me/api/');
    // data.subscribe(x=> console.log(x));
    // data.subscribe(x=> console.log(x));
    // data.subscribe(x=> console.log(x));

    // let info=ajax('https://randomuser.me/api/');
    // const sub=new Subject();    
    // sub.subscribe(x=> console.log('This is Observable subscribe',x));
    // sub.subscribe(x=> console.log('This is Observable subscribe',x));
    // sub.subscribe(x=> console.log('This is Observable subscribe',x));

    // info.subscribe(sub);
  }
    */
    /* Getting Data from RestFul APIs with Observables
    //ghService: GitHubService = inject(GitHubService);
   isLoading = true;
   users: null = null; // Assuming a single user is returned
   ngOnInit(){
    //this.searchParameter.valueChanges.pipe(debounceTime(300), filter((x)=> x.length >=3), distinctUntilChanged()).subscribe(x=>{console.log(x)});

    this.searchParameter.valueChanges.pipe(debounceTime(300), filter((x)=> x.length >=3), distinctUntilChanged()).subscribe(value=>
      this.ghService.getGitHubUserData(value).subscribe(
      (x : any)=> {
          console.log(x);
          this.isLoading=false;
          this.users = x.items;

      },
      (error) => {
        console.error('Error fetching user data', error);
        this.isLoading = false; // Stop loading on error
    }

    ));

    }*/
    /* subject and its types

    // ngOnInit(){

    //     const subject = new AsyncSubject(); 
    //     // initial value is not mandatory it takes, buffer size, freq
    //     //const subject = new BehaviouralSubject();
    //     //const subject = new ReplaySubject();
    //     subject.subscribe(x =>  console.log('RS Subscriber 0', x));
    //     subject.next(300);
    //     subject.subscribe(x =>  console.log('RS Subscriber 1', x));
    //     subject.next(2022);
    //     subject.subscribe(x =>  console.log('RS Subscriber 2', x));
    //     subject.next(2023);
    //     subject.subscribe(x =>  console.log('RS Subscriber 3', x));
    //     subject.next(2024);
    //     subject.complete();
     }
    */

    /*Promise vs Observable */
    // ngOnInit(){
    //   const promi=new Promise((resolve, reject) => {
    //   console.log("Promise is called");
    //   resolve(1000);
    //   resolve(10000);
    //   resolve(100000);
    //   resolve(1000000);
    // });
    // promi.then(x=> {console.log(x);});
    // const obs=new Observable( (stream) => {
    //     console.log("Observable is called");
    //     stream.next(2000);
    //     stream.next(3000);
    //     stream.next(4000);
    //     stream.next(5000);
    //     stream.next(6000);
    //   });
    
    // obs.subscribe((data) => console.log(data));
    // }

    
    counter=interval(1000); // returns a observable for every 1sec
    ctr: number=0;
    subscriber;
    array: number[]=[];
    subscribeObs(){
      this.subscriber=this.counter.subscribe(() => {
        this.array.push(this.ctr);
        ++this.ctr;
      })
    }

    unSubscribeObs(){
      this.subscriber.unsubscribe();
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
