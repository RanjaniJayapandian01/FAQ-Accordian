import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FireBaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrl: './form-exercise.component.css'
})
export class FormExerciseComponent {

  private fb: FireBaseService=inject(FireBaseService);
  private _http: HttpClient = inject(HttpClient);
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
    this.fb.CreateCommunityMember(member);
   
  }

  
}
