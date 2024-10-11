import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-eform',
  templateUrl: './eform.component.html',
  styleUrl: './eform.component.css'
})
export class EformComponent{

@ViewChildren('forminput') input  : QueryList<ElementRef>;
  request: string='';
  // ngAfterViewInit(){
  //   this.input.forEach( x=> {
  //     console.log(x.nativeElement.value);
  //   }
  //   )
  // }
  Show(){
    let name="";
    this.input.forEach( x=> {
      name+= x.nativeElement.value + ' ';
      console.log(x.nativeElement);
      console.log(x.nativeElement.value);
    }
    )
    this.request=name.trimEnd();
  }
}
