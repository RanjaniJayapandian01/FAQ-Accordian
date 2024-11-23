import { Component, EventEmitter, Inject } from "@angular/core";
import { UserService } from "../../Services/user.service";
import { UserProfile } from "../../models/userProfile";
import { User } from "../../products/user";

@Component({
    selector: 'app-admin',
    template:`
<div class="user-list">
<h2>Admin Section</h2>
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


<app-user></app-user>
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

    constructor(@Inject('USER_TOKEN') private userService: UserService) {
        this.users= this.userService.getUserList();  
       this.model  = new UserProfile((this.users && this.users.length >0) ? this.users.length+1 :  1 ,'','','','', new Date(),new Date(),false,'');
       this.initializeModel();
        console.log(this.users.length)      ;
    }
    
    ngOnInit(){
      this.users= this.userService.getUserList();  
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

}