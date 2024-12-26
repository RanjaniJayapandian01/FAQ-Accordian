import { Component, EventEmitter, inject, Inject } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { UserProfile } from "../../models/userProfile";
import { User } from "../../products/user";
import { UserRequest } from "../../models/UserRequest";
import { HttpClient } from "@angular/common/http";
import { Member } from "../../models/member";
import { map } from "rxjs/internal/operators/map";
import { FireBaseService } from "../../Services/firebase.service";


@Component({
    selector: 'app-admin',
    template:`

<h2>Admin Section</h2>
<div class="user-list">
  <h2>User List</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Customer Type</th>
        <th>Subscription</th>
        <th>Start Date</th>
        <th>Expiry Date</th>
        <th>Subscription Type</th>
        <th>View User</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>{{ user.id }}</td>
        <td>{{ user.userName }}</td>
        <td>{{ user.emailId }}</td>
        <td>{{ user.customerType }}</td>
        <td>{{ user.subscription ? 'Active' : 'Inactive' }}</td>
        <td>{{ user.startDate | date:'longDate' }}</td>
        <td>{{ user.endDate | date:'longDate' }}</td>
        <td>{{ user.subscriptionType }}</td>
        <td><i (click)="ShowSelectedUser(user)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg></i></td>
      </tr>
    </tbody>
  </table>


<div class="message-box">
    <table *ngIf="requests.length>0; else elseBlock">
    <thead>
    <tr>
    <th>Request Id</th>
    <th>Username</th>
    <th>Email</th>
    <th>Message</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let req of requests">

    <td>{{req.id}}</td>
    <td>{{req.username}}</td>
    <td>{{req.email}}</td>
    <td>{{req.message}}</td>

    </tr>
    </tbody>
    </table>
</div>
<ng-template #elseBlock>
  No Requests..
</ng-template>
  <div class="user-create">

<form (ngSubmit)="CreateNewUser()" #userForm="ngForm">
  <table>
    <thead>
      <tr>
        <th colspan="2">User Form</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>
          <input type="text" class="form-control" [(ngModel)]="model.userName" name="name" required>
        </td>
      </tr>
      <tr>
        <td>EmailId:</td>
        <td>
          <input type="email" class="form-control" [(ngModel)]="model.emailId" name="emailId" required>
        </td>
      </tr>
      <tr>
        <td>Password:</td>
        <td>
          <input type="password" class="form-control" [(ngModel)]="model.password" name="password" required>
        </td>
      </tr>
      <tr>
        <td>Customer Type:</td>
        <td>
          <select id="custType" class="form-control" [(ngModel)]="model.customerType" name="customerType" required>
            <option *ngFor="let c of custType" [value]="c">{{ c }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Subscription:</td>
        <td>
          <select id="plan" class="form-control" [(ngModel)]="model.subscription" name="subscription" required>
            <option *ngFor="let c of plan" [value]="c">{{ c }}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Start Date:</td>
        <td>
          <input type="date" class="form-control" [(ngModel)]="model.startDate" name="startDate" required>
        </td>
      </tr>
      <tr>
        <td>End Date:</td>
        <td>
          <input type="date" class="form-control" [(ngModel)]="model.endDate" name="endDate" required>
        </td>
      </tr>
    </tbody>
  </table>
  <button type="submit" class="btn btn-primary" [disabled]="!userForm.valid">Submit</button>
</form>


  </div>
</div>




<div class="user-list">

<div class="search-container">
<input type="text" class="search-box" placeholder="Filter by community member name..." > 
<button class="btn search-button" >Search</button>
</div>
<!-- <button class="btn btn-primary" (click)="fetchCommunityMembers()">Fetch All</button> -->

<h2>Community Members</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Interested in Gardening</th>
        <th>Experience</th>
        <th>Location</th>
        <th>Preferred Newsletter type</th>
        <th>Remove Member</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of community_members">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.isinterested }}</td>
        <td>{{ user.experience }}</td>
        <td>{{ user.location }}</td>
        <td>{{ user.preferredType }}</td>
        <td><button type="" class="btn btn-danger" (click)="RemoveMember(user.id)">Remove</button></td>
      </tr>
    </tbody>
  </table>


</div>


<!-- <app-user></app-user> -->
    `,
    styles:`
 .user-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Roboto, "Helvetica Neue", sans-serif;
  
}
  .user-create{
    padding: 20px;
    align-items: center;    

  }

h2 {
  text-align: center;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  color: #333;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}



.search-container {
  display: flex;
  justify-content: flex-end; /* Aligns items to the right */
}
  .search-box {
    align-items: right;
    margin-left: 700px;
    float: right;
    width: 700px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  .search-button {
    padding: 10px 15px;
    float: right;
    margin-left: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  .search-button:hover {
    background-color: #0056b3;
  }
 

    `,
})
export class AdminComponent{
  
    /**
     *
     */
     users : UserProfile[]=[];
     custType: string[] = ['Free', 'Basic', 'Premium'];
     plan: string[] = ['Quarterly', 'Monthly', 'Yearly'];
     model : any;
     requests: UserRequest[];
     private fb= inject(FireBaseService);
     community_members : Member[];

    constructor(@Inject('USER_TOKEN') private userService: UserService, private http: HttpClient) {
        this.users= this.userService.getUserList();  
       this.model  = new UserProfile((this.users && this.users.length >0) ? this.users.length+1 :  1 ,'','','','', new Date(),new Date(),false,'');
       this.initializeModel();
        console.log(this.users.length)      ;
        this.fb.fetchCommunityMembers().subscribe( (data)=>{
          this.community_members=data;
        });

      //  this.requests=this.userService.getUserRequest();
    }
    
    ngOnInit(){
      this.users= this.userService.getUserList();  
      this.requests=this.userService.getUserRequest();
      console.log(this.requests);
      this.fb.fetchCommunityMembers().subscribe( (data)=>{
        this.community_members=data;
      });    
    
    }
    initializeModel() {
        this.model = new UserProfile(
            this.getNextUserId(),
            '',
            '',
            '',
            '',
            new Date(),
            new Date(),
            false,
            ''
        );
    }
    getNextUserId(): number {
        // Generate next user ID based on current users
        return this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
    }
    CreateNewUser(){
        console.log("user created");        
        this.userService.AddUser(this.model);
        this.initializeModel(); // Reinitialize model for the next user
        console.log('admin component', this.users);
        //this.users=this.userService.getUserList();
    }


    ShowSelectedUser(userObj: UserProfile){
      this.userService.getSelectedUser(userObj);
    }

   // .subscribe(
  //   (response)=>{
  //     this.community_members=response;
  //     console.log(response);
  //   }
  // );

  RemoveMember(id: number){
    this.fb.DeleteCommunityMember(id);
  }

}