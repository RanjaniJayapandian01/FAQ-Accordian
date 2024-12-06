import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrl: './eform.component.css'
})
export class EformComponent{

  @ViewChild('feedbackForm') form : NgForm;
  productPurchased: string= "";
  feedback=["Quality of Plants", "Customer Service", "Variety of Plants", "Store Layout", "Pricing", "Online Shopping Experience"];
  radioOptions = [
    {id: 'inlineRadio1', value: 'option1', display: 'Very satisfied'},
    {id: 'inlineRadio2', value: 'option2', display: 'Satisfied'},
    {id: 'inlineRadio3', value: 'option3', display: 'Neutral'},
    {id: 'inlineRadio4', value: 'option4', display: 'Dissatisfied'},
    {id: 'inlineRadio5', value: 'option5', display: 'Very dissatisfied'}
  ]

  onSubmitFeedback(){
    console.log(this.form);
    console.log(this.form.controls['name'].value);
    console.log(this.form.value.email);

  }

}
