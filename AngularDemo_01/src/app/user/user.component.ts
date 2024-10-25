import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserProfile } from '../models/userProfile';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users : UserProfile[]=[];
  constructor(private userService: UserService) {
    this.users= this.userService.getUserList();  
   // this.model  = new UserProfile((this.users && this.users.length >0) ? this.users.length+1 :  1 ,'','','','', new Date(),new Date(),false,'');
    console.log(this.users.length)      ;
  }
}
