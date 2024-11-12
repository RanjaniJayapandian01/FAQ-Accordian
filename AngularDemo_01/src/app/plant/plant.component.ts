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



  /**
   *
   */
  constructor(private route: ActivatedRoute) {    
  }
  plantSelected: Plant;
  ngOnInit(){
    this.route.queryParams.subscribe( params=> {
      console.log(params['data']);
      if(params['data']){
        this.plantSelected=JSON.parse(params['data']);
      }

    })
  }


}
