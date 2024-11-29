import { EventEmitter, Injectable } from "@angular/core";
import { UserProfile } from "../models/userProfile";
import { LoggerService } from "./logger.service";
import { User } from "../products/user";
import { Subject } from "rxjs";
import { UserRequest } from "../models/UserRequest";

@Injectable({
    providedIn: 'root'
})
export class UserService{

  /**
   *
   */
  constructor(private logger : LoggerService) {
    
    
  }
    private users: UserProfile[] = [
      {
        id: 1,
        userName: 'JohnDoe',
        emailId: 'john@example.com',
        password: 'password123',
        customerType: 'Premium',
        subscription: true,
        startDate: new Date(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        subscriptionType: 'Yearly'
        
      },
      {
        id: 2,
        userName: 'JaneSmith',
        emailId: 'jane@example.com',
        password: 'securePass456',
        customerType: 'Basic',
        subscription: false,
        startDate: new Date('2023-01-15'),
        endDate: null,
        subscriptionType: 'None'
        
      },
      {
        id: 3,
        userName: 'MikeJohnson',
        emailId: 'mike@example.com',
        password: 'mypassword789',
        customerType: 'Premium',
        subscription: true,
        startDate: new Date('2023-05-10'),
        endDate: new Date(new Date('2023-05-10').setFullYear(new Date('2023-05-10').getFullYear() + 1)),
        subscriptionType: 'Yearly'
        
      },
      {
        id: 4,
        userName: 'EmilyDavis',
        emailId: 'emily@example.com',
        password: 'emily12345',
        customerType: 'Free',
        subscription: false,
        startDate: new Date('2023-03-20'),
        endDate: null,
        subscriptionType: 'None'
        
      },
      {
        id: 5,
        userName: 'DavidBrown',
        emailId: 'david@example.com',
        password: 'david2023',
        customerType: 'Premium',
        subscription: true,
        startDate: new Date('2023-09-01'),
        endDate: new Date(new Date('2023-09-01').setFullYear(new Date('2023-09-01').getFullYear() + 1)),
        subscriptionType: 'Yearly'
        
      }
  ] ;

  shareSelectedUser : EventEmitter<UserProfile>=new EventEmitter<UserProfile>();

    getUserList(){
        return this.users;        
    }


    AddUser(obj : UserProfile){
        this.users.push(obj);
       // let logger=new LoggerService();
        this.logger.logActions("New User was added by AddUser");
    }

    getSelectedUser(obj : UserProfile){
      this.shareSelectedUser.emit(obj);
    }

    // this was added for testing
    //addTask : EventEmitter<string> =new EventEmitter<string>();
    addTask =new Subject();
    ShareNewTask(val: string){
      this.addTask.next(val);
    }

    userRequests: UserRequest[]=[];
    getUserRequest(){
      return this.userRequests;
    }

    addUserRequest(obj: UserRequest){

      this.userRequests.push(obj);
      console.log(this.userRequests);
    }

    setUserRequest(arrObj: UserRequest[]){
      this.userRequests=arrObj;
    }


}