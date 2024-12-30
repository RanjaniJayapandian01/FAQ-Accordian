import { Component, inject, Inject } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserProfile } from '../models/userProfile';
import { User } from '../products/user';
import { PlantService } from '../Services/plant.service';
import { userPreferences } from '../models/userPreferences';
import { Plant } from '../models/Plant';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { Member } from '../models/member';
import { FireBaseService } from '../Services/firebase.service';
import { SnackBarService } from '../Services/snackBar.service';

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
  updateForm: boolean =false;
  isMember: boolean = false;
  memberShipData : Member;
  updateUser : Member;
  _fbService= inject(FireBaseService);
  private _snackbar: SnackBarService =inject(SnackBarService);

  
  
  constructor(@Inject('USER_TOKEN') private userService: UserService) {
    this.users= this.userService.getUserList();  
    //this.userPreferenceItems=this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);
    this.userPreferenceItems=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);
   // this.model  = new UserProfile((this.users && this.users.length >0) ? this.users.length+1 :  1 ,'','','','', new Date(),new Date(),false,'');
    //this.userService.shareSelectedUser.subscribe((data: any) => this.selectedUser=data);
    this.selectedUser=this.userService.currentUser;    
  }


  ngOnInit(){
    
   // this.userService.shareSelectedUser.subscribe( (data: any) => this.selectedUser=data);
    this.selectedUser=this.userService.currentUser;
    //this.userPrefList= this.plantservice.getUserPreferences().filter(x=> x.IsSaved===true);
    this.userPrefList=this.activatedRoute.snapshot.data['data']?.filter(x=> x.IsSaved===true);
    // v1
    /*  this._fbService.fetchCommunityMembers().subscribe((data) => {
    //   if (this.selectedUser && this.selectedUser.userName) {

    //     this.memberShipData = data.find(x => x.username === this.selectedUser.userName);
    //     if (this.memberShipData) {
    //       this.isMember = true;
    //     }
    //   }
     }); */

     // v2
    this._fbService.fetchCommunityMembers().subscribe(
      {next:  (data) => {
        console.log("hey......");
        if (this.selectedUser && this.selectedUser.userName) {
  
          this.memberShipData = data.find(x => x.username === this.selectedUser.userName);
          if (this.memberShipData) {
            this.isMember = true;
          }
        }
      },
        error: (err)=>{
            console.log(err);
            if(err.error.error === 'Permission denied'){
              setTimeout(()=>{this._snackbar.openSnackBar("Access Denied", "")}, 3000);              
            }
        }
      },
      
     );
     
    
     // v3
    // this._fbService.fetchCommmunityMemberById(this.selectedUser.userName).subscribe({next: (data)=>{
    //   //this.memberShipData=data;
    // }, error: (err)=>{console.log(err);
    //   if(err.error.error === 'Permission denied'){
    //     setTimeout(()=>{this._snackbar.openSnackBar("Access Denied", "")}, 3000);              
    //   }
    // }
    // });
  }

  UpdateUserInfo(){
    this.updateForm=!this.updateForm;
    this._fbService.fetchCommunityMembers().subscribe(
      {next:  (data) => {
        console.log("hey......");
        if (this.selectedUser && this.selectedUser.userName) {
  
          this.memberShipData = data.find(x => x.username === this.selectedUser.userName);
          if (this.memberShipData) {
            this.isMember = true;
          }
        }
      },
        error: (err)=>{
            console.log(err);
            if(err.error.error === 'Permission Denied'){
              setTimeout(()=>{this._snackbar.openSnackBar("Access Denied", "")}, 3000);              
            }
        }
      },
      
     );
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

  UpdateCommunityMember(){
    this.updateForm=!this.updateForm;
    this.updateUser=this.memberShipData;
    console.log(this.memberShipData);
  }
  
}
