import { style } from "@angular/animations";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[temp-style]'
})
export class StyleComponent{

    constructor(private element: ElementRef, private renderer: Renderer2){
    }

    @Input('temp-style') set setStyle(obj: Object){
        let entries=Object.entries(obj);
        for(var item of entries){
            let[style, value]= item;
            this.renderer.setStyle(this.element.nativeElement, style, value);
        }        
    }

    // @HostListener('click') OnClick(obj: Object){
    //     let entries=Object.entries(obj);
    //     for(var item of entries){
    //         let[style, value]= item;
    //         this.renderer.setStyle(this.element.nativeElement, style, value);
    //     }  
    // }

}