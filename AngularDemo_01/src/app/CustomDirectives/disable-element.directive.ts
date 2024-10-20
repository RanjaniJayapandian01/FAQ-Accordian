import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[disableElement]'
})
export class DisableElement{

    constructor(private element: ElementRef, private renderer : Renderer2){

    }

    @Input() set disableElement(ele: boolean){
        if(ele){
            this.renderer.addClass(this.element.nativeElement, 'card-disable' );
        }
    }

}