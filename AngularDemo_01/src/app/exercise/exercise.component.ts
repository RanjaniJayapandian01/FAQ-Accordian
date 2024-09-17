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
     /**
      *
      */
     constructor(exservice : ExerciseService ) {
      this.totalPlantList = exservice.getPlants();
     }

}
export class Plant{
    name : string;
    description : string;
    imgUrl: string;
    price : number;
    rating : number;
    discount : number;
    /**
     *
     */
    constructor(name: string, description: string, imgUrl : string, price : number, rating : number, discount : number) {
      this.name=name;
      this.description=description;
      this.imgUrl= imgUrl;
      this.price=price;
      this.rating= rating;
      this.discount = discount;

      
    }
    GenerateAdditionalInfo(name:  string){
      if(name=='Lily')
      window.open('https://en.wikipedia.org/wiki/Lilium', '_blank');
      if(name =='Cactus')
        window.open('https://en.wikipedia.org/wiki/Cactus', '_blank');

    }

}
