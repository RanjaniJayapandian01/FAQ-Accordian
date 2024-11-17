import { Component, EventEmitter, inject, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ExerciseService } from './exercise.service';

import {Plant} from './../models/Plant';
import { userPreferences } from '../models/userPreferences';
import { PlantService } from '../Services/plant.service';
import { CartItem } from '../models/CartItem';
import { Router } from '@angular/router';
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
          plantTypes: string[]=["Herbs", "Shrubs", "Medicinal Plants", "Climbers", "Creepers" ];
          priceRange : string[]=["100-200", "250-500", "500-1000"];
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
    
     constructor(private exservice : ExerciseService, private plantservice : PlantService ,private snackBService:SnackBarService) {
      this.totalPlantList = exservice.getPlants();
      this.filteredPlants= this.totalPlantList;
      this.featuredPlantList=exservice.getFeaturedPlants();
      this.userPreferenceItems=plantservice.getUserPreferences();
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
      let likedPlantByUser : userPreferences= { userId: 100, plant : obj, IsSaved: true}
      this.userPreferenceItems.push(likedPlantByUser);
      }      
      
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



}
