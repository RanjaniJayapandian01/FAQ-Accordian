export class UserRequest{
    static reqid: number=0;
    username: string;
    email: string;
    message: string;
    id: number;
    constructor(email: string, username: string, message: string) {
        
        this.username = username;
        this.email = email;
        this.message = message;
        this.id=UserRequest.reqid++;
    }

}