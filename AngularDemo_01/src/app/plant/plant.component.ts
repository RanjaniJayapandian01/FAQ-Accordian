import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Plant } from '../models/Plant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent {

  

  // @Input()
  // exePlantComp : ExerciseComponent;
  // plantSelected : Plant ;
  // ngOnInit(){
  //   this.plantSelected  = this.exePlantComp.selectedPlant;
  // }

  constructor(private route: ActivatedRoute) {    
  }
  plantSelected: Plant;
  ngOnInit(){
    this.route.queryParams.subscribe( params=> {
      console.log(params['data']);
      if(params['data']){
       this.plantSelected=JSON.parse(params['data']);
      //  this.plantSelected=JSON.parse(localStorage.getItem('productdata'));
      }

    })
  //  const data=JSON.parse(localStorage.getItem('productdata'));
  //  this.plantSelected=data;


  }
  addToCart: number=0;
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
