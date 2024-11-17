import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Plant } from '../models/Plant';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../Services/plant.service';
import { ExerciseService } from '../exercise/exercise.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css',
  providers:[ExerciseService]
})
export class PlantComponent {

  

  // @Input()
  // exePlantComp : ExerciseComponent;
  // plantSelected : Plant ;
  // ngOnInit(){
  //   this.plantSelected  = this.exePlantComp.selectedPlant;
  // }

  constructor(private route: ActivatedRoute, private ps: ExerciseService) {    
  }
  plantSelected: Plant;
  plantListObs;
  plantsList: Plant[];

  ngOnInit(){

     //this.plantSelected= this.ps.getPlants().find(x=> x.id === +this.route.snapshot.paramMap.get('id'));
    // this.route.paramMap.subscribe(x=>
    // {
    //   this.plantSelected= this.ps.getPlants().find(y=> y.id === x.get('id'));
    // }
    // )
      this.plantsList=this.ps.getPlants();
     this.plantListObs= this.route.paramMap.subscribe(params => {
        const id = +params.get('id'); // Convert the id to number
        this.plantSelected = this.ps.getPlants().find(x => x.id === id);
      });
    
    
    console.log(this.plantSelected);

  }

  ngOnDestroy()
  {
    this.plantListObs.unsubscribe();
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


//this.route.queryParams.subscribe( params=> {
  //       //console.log(params['data']);
  //           this.plantsList=this.ps.getPlants();
  //           this.plantSelected=this.plantsList[params['id']];
  //           console.log(+params['id']);
  //           const id = +params['id'];  // Converts the string to a number
  // console.log(id);  // If params['id'] is "123", it will print 123 (as a number)
  
  //         console.log(this.plantSelected);
  //       // if(params['id']){
  //       //  this.plantSelected=this.ps.getPlants[params['id']];
  //       // //  this.plantSelected=JSON.parse(localStorage.getItem('productdata'));
  //       // }
  
  //     })
  
  
    // ngOnInit(){
    //   this.route.queryParams.subscribe( params=> {
    //     console.log(params['data']);
    //     if(params['data']){
    //      this.plantSelected=JSON.parse(params['data']);
    //     //  this.plantSelected=JSON.parse(localStorage.getItem('productdata'));
    //     }
  
    //   })
    //  const data=JSON.parse(localStorage.getItem('productdata'));
    //  this.plantSelected=data;
  
  