import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrl: './form-exercise.component.css'
})
export class FormExerciseComponent {


  constructor(private http: HttpClient){

  }

  selectedUpdateMethods: string[]=[];
  subscriptionType= [
    {id: 'update-email', value:'email', label: 'Email newsletters'}, 
    {id: 'update-sms', value:'sms', label: 'SMS'}, 
    {id: 'update-social', value:'social', label: 'Social Media'}, 
    {id: 'update-instore', value:'instore', label:'In-store'}]

  onSubmit(form: NgForm){
    console.log(form);

    const member = {username: form.value.username, email: form.value.email, location: form.value.location, isinterested: form.value.interest, experience: form.value.experience, preferredType: ["email", "sms"] };
    console.log(member);
    const headers={header: 'test'}
//    console.log(form.value);
    this.http.post('https://my-awesome-c993d-default-rtdb.firebaseio.com/community_members.json', member ).subscribe(
      (response)=>{
        console.log(response)
       }
       //,
      // (error)=>{
      //   console.log(error);
      // }
    );
  }

  
}
