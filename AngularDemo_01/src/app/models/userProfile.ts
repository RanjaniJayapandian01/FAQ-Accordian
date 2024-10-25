import { userPreferences } from "./userPreferences";

export class UserProfile{
    id: number;
    userName: string;
    emailId: string;
    password: string;
    customerType: string;
    startDate: Date;
    endDate: Date;
    subscription: boolean;
    subscriptionType : string;    
    

    constructor( id: number,  userName : string,  emailId: string,  password: string,  customerType: string,  startDate: Date,  endDate: Date,   subscription: boolean,  subscriptionType: string) {               
        this.id=id;
        this.userName=userName;
        this.emailId=emailId;
        this.password=password;
        this.customerType=customerType;
        this.startDate=startDate;
        this.endDate=endDate;
        this.subscription=subscription;
        this.subscriptionType=subscriptionType;
        
    }
}