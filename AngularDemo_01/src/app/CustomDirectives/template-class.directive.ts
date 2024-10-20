import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";


@Directive({
    selector: '[temp-class]'
})
export class TemplateComponent{

    constructor(private ele : ElementRef, private renderer : Renderer2){

    }

    @Input('temp-class') set dirProperty(obj : Object){
        
        let entry= Object.entries(obj);
        console.log(entry);
      //  console.log(obj[0][1], obj[0][0]);
      for(let item of entry){
        console.log(item[0], item[1]);
        let[className, condition]=item;
        if(condition)
            this.renderer.addClass(this.ele.nativeElement, className);        
      }
        
    }
}