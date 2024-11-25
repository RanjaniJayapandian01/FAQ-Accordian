import { Component, inject, Inject } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserProfile } from '../models/userProfile';
import { User } from '../products/user';
import { PlantService } from '../Services/plant.service';
import { userPreferences } from '../models/userPreferences';
import { Plant } from '../models/Plant';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',

})
export class UserComponent {
  users : UserProfile[]=[];
  userPreferenceItems: userPreferences[]=[];
  selectedUser : UserProfile;
  plantservice: PlantService=inject(PlantService);
  searchString: string="";
  route=inject(Router);
  activatedRoute=inject(ActivatedRoute);
  userPrefList: userPreferences[];
  constructor(@Inject('USER_TOKEN') private userService: UserService) {
    this.users= this.userService.getUserList();  
    //this.userPreferenceItems=this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);
    this.userPreferenceItems=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);
    console.log((this.userPreferenceItems));
   // this.model  = new UserProfile((this.users && this.users.length >0) ? this.users.length+1 :  1 ,'','','','', new Date(),new Date(),false,'');
    console.log('user component',this.users);
    this.selectedUser=this.users[0];
  }

  ngOnInit(){
    this.userService.shareSelectedUser.subscribe( (data: any) => this.selectedUser=data);
    //this.userPrefList= this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);
    this.userPrefList=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);
    console.log((this.userPrefList));


// dirty code
  //   this.activatedRoute.queryParamMap.subscribe(x => this.searchString = x.get('search'));
  //   if(this.searchString.length>0){
  //     if(this.searchString!==null || this.searchString!== undefined)  {
  //       this.userPrefList= this.userPrefList.filter(x=> x.plant.name.toLowerCase().includes(this.searchString.toLowerCase()))      
  //     }
  // }
  // else{
  //   this.userPrefList=this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);    
  // }

  }

  SaveUserPreference(obj: Plant){
    const prefPlant = this.userPreferenceItems.find(p => p.plant.id === obj.id);           
    if (prefPlant) {
        prefPlant.IsSaved = !prefPlant.IsSaved; // Update the isSaved property
    }    
    else{
    let likedPlantByUser : userPreferences= { userId: 100, plant : obj, IsSaved: true}
    this.userPreferenceItems.push(likedPlantByUser);
    }      
    this.userPreferenceItems=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);

  }
  
  CheckIsPrefered( plant : Plant){
   // this.userPrefList= this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);
   this.userPreferenceItems=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);

  return  this.userPreferenceItems.some( x => (JSON.stringify(x.plant) === JSON.stringify(plant) && x.IsSaved === true));        
  }

  onSearchUpdated(value: string){
    if(value.length>0){
        if(value!==null || value!== undefined)  {         
        this.route.navigate(['/user'], {queryParams: {search: value}});
        }
    }
    else{      
      this.route.navigate(['/user']);
    }
  }

  ViewPlantInfo(id: number){
      this.route.navigate(['/plants', id]);
  }

}
