import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FireBaseService } from '../Services/firebase.service';
import { Member } from '../models/member';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';

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
  @Input() editMode: boolean=false;
  @Input() selectedUser: Member;
  @ViewChild('communityform') updateMemberForm : NgForm;

  selectedUpdateMethods: string[]=[];
  subscriptionType= [
    {id: 'update-email', value:'email', label: 'Email newsletters'}, 
    {id: 'update-sms', value:'sms', label: 'SMS'}, 
    {id: 'update-social', value:'social', label: 'Social Media'}, 
    {id: 'update-instore', value:'instore', label:'In-store'}]

  onSubmit(form: NgForm){

    if(!this.editMode){
    const member = {username: form.value.username, email: form.value.email, location: form.value.location, isinterested: form.value.isinterested, experience: form.value.experience, preferredType: ["email", "sms"] };
    const headers={header: 'test'}
    this.fb.CreateCommunityMember(member);
    }
    else{
      const member = {username: form.value.username, email: form.value.email, location: form.value.location, isinterested: form.value.isinterested, experience: form.value.experience, preferredType: ["email", "sms"] };
      this.fb.UpdateCommunityMember(this.selectedUser.id, member  );
    }
  }

  ngAfterViewInit(){
    //setTimeout(()=>{this.updateMemberForm.setValue(this.selectedUser)}, 0);
    setTimeout(()=>{this.updateMemberForm.form.patchValue(this.selectedUser)}, 0);
  }
  
}
