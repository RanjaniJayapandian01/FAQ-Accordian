import { Component, Input } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';
import { Plant } from '../models/Plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrl: './plant.component.css'
})
export class PlantComponent {

  

  @Input()
  exePlantComp : ExerciseComponent;
  plantSelected : Plant ;
  ngOnInit(){
    this.plantSelected  = this.exePlantComp.selectedPlant;
  }
}
