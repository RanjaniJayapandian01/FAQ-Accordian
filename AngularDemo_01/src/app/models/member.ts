
export class Member{
    username: string; 
    email: string;
    location: string;
    isinterested: string;
    preferredType: string[];
    experience: string;
    id?: number;
    /**
     *
     */
    constructor(un: string, email: string, location: string, memberinterest: string, experience: string, type: string[]) {
        this.username=un;
        this.email=email;
        this.location=location;
        this.isinterested=memberinterest;
        this.preferredType=type;
        
    }
}