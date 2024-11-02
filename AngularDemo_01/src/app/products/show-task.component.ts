import { Component, inject } from "@angular/core";
import { UserService } from "../Services/user.service";

@Component({
    selector:'app-show-task',
    template: 
    `
    <div class="container">
        <ul class="task-list">
            <li *ngFor="let task of tasks; let i = index" class="task-item">
            {{ task }}
            <button class="delete-button" (click)="deleteTask(i)">Delete</button>
            </li>
        </ul>
    </div>
    `,
    styles:
    `
    body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.container {
    width: 100%;
    max-width: 400px; /* Limit the maximum width */
    margin: 50px auto;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

h1 {
    text-align: center;
}

.task-input {
    display: flex;
    margin-bottom: 20px;
}

input[type="text"] {
    flex: 1; /* Take remaining space */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 10px;
    border: none;
    background-color: #5cb85c;
    color: white;
    border-radius: 3px;
    margin-left: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

.task-list {
    list-style: none;
    padding: 0;
}

.task-item {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.delete-button {
    padding: 5px 10px;
    border: none;
    background-color: #d9534f;
    color: white;
    border-radius: 3px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: #c9302c;
}

    
    `
})
export class ShowTaskComponent{
    tasks: string[]=["task 1", "task 2", "task 3"];

    userSvc: UserService = inject(UserService);

    ngOnInit(){
        this.userSvc.addTask.subscribe((x : string)=> this.tasks.push(x));
    }

    deleteTask(i: any){
        
    }
}