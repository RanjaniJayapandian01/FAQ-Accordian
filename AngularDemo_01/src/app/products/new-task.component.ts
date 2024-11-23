import { Component, inject } from "@angular/core";
import { UserService } from "../Services/user.service";

@Component({
    selector: 'app-new-task',
    template:
    `
        <div class="container">
        <h3>Create Task</h3>
        <div class="task-input">
                    <input type="text" id="taskInput" placeholder="Enter your task here..." [(ngModel)]="taskDetail" />
            <button id="addTaskButton" (click)="CreateTask()">Add Task</button>
        </div>
    </div>

    `,
    styles: `
    body {
   font-family: Roboto, "Helvetica Neue", sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}


.container {
    width: 100%; /* Full width */
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
    margin-top: 20px;
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

    `
})
export class NewTaskComponent{

    taskDetail : string="";
    userService : UserService =inject(UserService);
    CreateTask(){
        console.log(this.taskDetail);
        this.userService.ShareNewTask(this.taskDetail);
    }
}