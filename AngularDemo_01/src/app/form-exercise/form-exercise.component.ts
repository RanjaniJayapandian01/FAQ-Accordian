import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { FireBaseService } from '../Services/firebase.service';
import { Member } from '../models/member';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { SnackBarService } from '../Services/snackBar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrl: './form-exercise.component.css'
})
export class FormExerciseComponent {

  private fb: FireBaseService=inject(FireBaseService);
  private _http: HttpClient = inject(HttpClient);
  private _snackbar: SnackBarService =inject(SnackBarService);
  private _route: Router =inject(Router);
  errorData: string=null;
  constructor(private http: HttpClient){
      this.fb.errorSubject.subscribe({error: (httpErrorResponse)=>{
        this.errorData=httpErrorResponse.error.error;
        this._snackbar.openSnackBar(this.errorData, "");
      }});
  }
  @Input() editMode: boolean=false;
  @Input() selectedUser: Member;
  @ViewChild('communityform') updateMemberForm : NgForm;

  @Output() CloseForm: EventEmitter<any>=new EventEmitter<any>();

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
    this._snackbar.openSnackBar("Registered Member Successfully", "Done");
    }
    else{
      const member = {username: form.value.username, email: form.value.email, location: form.value.location, isinterested: form.value.isinterested, experience: form.value.experience, preferredType: ["email", "sms"] };
      this.fb.UpdateCommunityMember(this.selectedUser.id, member  );
      this._snackbar.openSnackBar("Updated Member Successfully", "Done");
      this.editMode=false;
      this.CloseForm.emit(this.editMode);
    }

    this._route.navigateByUrl('user');
    

  }

  ngAfterViewInit(){
    //setTimeout(()=>{this.updateMemberForm.setValue(this.selectedUser)}, 0);
    setTimeout(()=>{this.updateMemberForm.form.patchValue(this.selectedUser)}, 1000);
  }
  
}
