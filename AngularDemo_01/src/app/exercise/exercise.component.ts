import { Component, EventEmitter, inject, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ExerciseService } from './exercise.service';

import {Plant} from './../models/Plant';
import { userPreferences } from '../models/userPreferences';
import { PlantService } from '../Services/plant.service';
import { CartItem } from '../models/CartItem';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { ToastComponent } from './toast.component';
import { SnackBarService } from '../Services/snackBar.service';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
  providers: [ExerciseService],
})
export class ExerciseComponent {
@Input()  updatecartList: CartItem[]=[]
          cartList : CartItem[]=[];
          cobj: CartItem;
          plantTypes: string[]=["Herbs", "Shrubs", "Medicinal Plants", "Climbers", "Creepers" ,"Flowers"];
          priceRange : string[]=["30-99", "100-249", "250-500", "501-1000"];
          avaliability : string[] =["In Stock", "Out of Stock"];
          totalPlantList? : Plant[];
          addToCart: number=0;
          searchValue: string ="";
          isSearch : boolean =false;   
          selectedPlant : any;
          featuredPlantList: Plant[];
          filteredPlants? : Plant[]
          userPreferenceItems: userPreferences[];
@Output() totalCartItems = new EventEmitter<any>();
@ViewChild(ToastComponent) toast!: ToastComponent;
    activatedRoute: ActivatedRoute=inject(ActivatedRoute);
     constructor(private exservice : ExerciseService, private plantservice : PlantService ,private snackBService:SnackBarService) {
      this.totalPlantList = exservice.getPlants();
      this.filteredPlants= this.totalPlantList;
      this.featuredPlantList=exservice.getFeaturedPlants();
      this.userPreferenceItems=plantservice.getUserPreferences();
     }


     ngOnInit(){
      //V1
      // this.activatedRoute.queryParamMap.subscribe(x=>{

      //   const param1=x.get('price').split('-');
      //   const min=Number(param1[0]);
      //   const max=Number(param1[1]);

      //   if(param1.length>0){
      //     console.log(min +" "+max+" outside");
      //     if(min>0 && max>min){
      //       console.log(min+" "+max);
      //     this.filteredPlants=this.totalPlantList.filter(x=> x.price>=min && x.price<=max);
      //     console.log(this.filteredPlants);
      //     }
      //     else
      //     this.filteredPlants=this.totalPlantList;
      //   }
      //   else{
      //     this.filteredPlants= this.totalPlantList;
      //   }
      // });


      this.activatedRoute.queryParamMap.subscribe((x) => {
        const price = x.get('price'); // Get the 'price' query param
      
        if (price) {
          const param1 = price.split('-'); // Split the price range
          if (param1.length === 2) { // Ensure the split array has two parts
            const min = Number(param1[0]);
            const max = Number(param1[1]);
      
            if (!isNaN(min) && !isNaN(max) && min > 0 && max > min) {
              console.log(min + " " + max);
              this.filteredPlants = this.totalPlantList.filter(
                (plant) => plant.price >= min && plant.price <= max
              );
              console.log(this.filteredPlants);
              return; // Exit early since filtering is done
            }
          }
        }
      
        // Default behavior if 'price' is missing or invalid
        this.filteredPlants = this.totalPlantList;
      });
      

     }

     AddToCart(plant: Plant){
      let cartObj : CartItem;
      cartObj=new CartItem(plant.imgUrl ,plant.name, plant.price, plant.qtyOrdered, plant.discount);
      this.cartList.push(cartObj);
     // console.log("From Exercise comp", this.cartList);
      this.cobj=cartObj;
      this.totalCartItems.emit(this.cobj);
     }
     
     HandleFilterSelection(type : string[], x : string ){
        console.log(type);
        console.log(x);
        if(type.length>0){
        // type.forEach(item=>{
        //   this.filteredPlants=this.totalPlantList.filter(y=> y.type === item)
        // })
        if(x=== 'planttype')
        this.filteredPlants=this.totalPlantList.filter(y=> type.includes(y.type)) ;
        if(x === 'stock')
          this.filteredPlants=(type.includes('In Stock') && (!type.includes('Out of Stock'))) ?  this.totalPlantList.filter(y=> y.stock>0) : (type.includes('Out of Stock') && (!type.includes('In Stock'))) ? this.totalPlantList.filter(y=> y.stock === 0) : this.totalPlantList ;
        }
        else{
          this.filteredPlants=this.totalPlantList;
        }

     }
   
     GenerateAdditionalInfo(name:  string){
      if(name=='Lily')
        window.open('https://en.wikipedia.org/wiki/Lilium', '_blank');
      if(name =='Cactus')
        window.open('https://en.wikipedia.org/wiki/Cactus', '_blank');

    }

    searchPlantsByName(){            
      if(this.searchValue.length>0){
        this.isSearch=true;
        this.filteredPlants=this.totalPlantList?.filter(plant => plant.name.toLowerCase().includes(this.searchValue.toLowerCase()));
      }
      else{
      this.isSearch=false;
      this.filteredPlants=this.totalPlantList;
      }
    }

    changeQuantity(plant: Plant, changeByVal : number){
      console.log("Before change",plant.qtyOrdered);
      console.log('Change called with:', changeByVal); // Add this line
        let qtyAvailable=plant.stock;
        if(changeByVal<0 && this.addToCart>0){
           this.addToCart--;
        }
        if(changeByVal>0 && this.addToCart<plant.stock){
           this.addToCart++;                   
        }  
        plant.qtyOrdered =this.addToCart;
        console.log("After change", plant.qtyOrdered);
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //   if (changes['updatecartList']) {
    //     if(this.updatecartList.length)
    //     this.cartList=this.updatecartList;
    //     console.log('Updated cart items in ExerciseComponent:', this.cartList);
    //     // You can add logic here to update anything dependent on cart items
    //   }
    // }
    
    SaveUserPreference(obj: Plant){
      const prefPlant = this.userPreferenceItems.find(p => p.plant.id === obj.id);           
      if (prefPlant) {
          prefPlant.IsSaved = !prefPlant.IsSaved; // Update the isSaved property
      }    
      else{
      let likedPlantByUser : userPreferences= { userId: 1, plant : obj, IsSaved: true}
      this.userPreferenceItems.push(likedPlantByUser);
      }      
     console.log(this.userPreferenceItems) ;
    this.plantservice.updateUserPreferences(this.userPreferenceItems);
    }
    
    CheckIsPrefered( plant){
    return  this.userPreferenceItems.some( x => (JSON.stringify(x.plant) === JSON.stringify(plant) && x.IsSaved === true));        
    }

    router= inject(Router);

    GetSelectedPlantInfo(plant: Plant){

      const productdata= JSON.stringify(plant);
      console.log(productdata);
     // localStorage.setItem('productdata',J SON.stringify(plant));
      // this.router.navigate(['plants'], {queryParams: { data: productdata}});
     // this.router.navigateByUrl('plants');

     this.router.navigateByUrl('plants/'+plant.id);
    }

    SendToCart(plant : Plant){
      // create cart object
      // use service to pass cart data and set in the service instance. 
      // navigate to Cart component
      
      let cartObj : CartItem;
      cartObj=new CartItem(plant.imgUrl, plant.name, plant.price, plant.qtyOrdered, plant.discount);
      this.plantservice.setUserCartItems(cartObj);
      this.snackBService.openSnackBar('Item Added Successfully', 'Done')
      // this.toast.show('Item added to cart!');

      // this.router.navigateByUrl('cart');
    }

    // GetPlantByPriceRange(min: HTMLInputElement, max: HTMLInputElement){
    //   console.log(min.value);
    //   console.log(max.value);
    //   if(min.value !== undefined && max.value!== undefined && min.value !== null && max.value!== null )
    //     this.router.navigate(['/plants'], {queryParams: {price:min.value+"-"+max.value}});
    // }

    GetPlantByPriceRange(min: HTMLInputElement, max: HTMLInputElement) {
      const minValue = min.value;
      const maxValue = max.value;
    
      // Ensure values are not empty and valid numbers
      if (minValue && maxValue && !isNaN(+minValue) && !isNaN(+maxValue)) {
        this.router.navigate(['/plants'], { queryParams: { price: `${minValue}-${maxValue}` } });
      } else {
        this.router.navigate(['/plants']);
      }
    }
    

}
