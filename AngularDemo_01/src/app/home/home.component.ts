import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseService } from '../exercise/exercise.service';
import { Plant } from '../models/Plant';
import { PlantService } from '../Services/plant.service';
import { userPreferences } from '../models/userPreferences';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ExerciseService]
})
export class HomeComponent {

  featuredPlantList: Plant[];
  exservice: ExerciseService = inject(ExerciseService);
  plantservice: PlantService =inject(PlantService);
  userPreferenceItems: userPreferences[];


  activatedRoute: ActivatedRoute= inject(ActivatedRoute);

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((data)=>{
        this.jumToSection(data);
    });
    this.featuredPlantList=this.exservice.getFeaturedPlants();
    this.userPreferenceItems=this.plantservice.getUserPreferences();
  }

  jumToSection(sectionId: string){
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  }

    
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

}
