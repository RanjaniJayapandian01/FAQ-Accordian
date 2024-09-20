import { Component } from '@angular/core';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css',
  providers: [ExerciseService],
})
export class ExerciseComponent {
     totalPlantList? : Plant[];
     addToCart: number=0;
     searchValue: string ="";
     isSearch : boolean =false;
     /**
      *
      */
     filteredPlants? : Plant[]
     constructor(exservice : ExerciseService ) {
      this.totalPlantList = exservice.getPlants();
      this.filteredPlants= this.totalPlantList;
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
}
export class Plant{
    name : string;
    description : string;
    imgUrl: string;
    price : number;
    rating : number;
    discount : number;
    stock: number;
    qtyOrdered : number;
    /**
     *
     */
    constructor(name: string, description: string, imgUrl : string, price : number, rating : number, discount : number, quantityAvailable : number) {
      this.name=name;
      this.description=description;
      this.imgUrl= imgUrl;
      this.price=price;
      this.rating= rating;
      this.discount = discount;
      this.stock=quantityAvailable; 
      this.qtyOrdered=0;
    }    

}
