import { Component, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[card-hover]',
})

export class CardHoverComponent{
    private element : ElementRef;
    /**
     *
     */
    constructor( e : ElementRef) {
        this.element=e;
    }
    ngOnInit() {
        const element = this.element.nativeElement;    
        element.style.transition = 'transform 0.3s ease';    
        element.onmouseover = () => {
          element.style.transform = 'scale(1.05)';
        };    
        element.onmouseleave = () => {
          element.style.transform = 'scale(1)';
        };
      }
    // @HostListener('mouseenter') onMouseEnter() {
    //     this.element.nativeElement.style.transform = 'scale(1.05)';
    //     this.element.nativeElement.style.transition = 'transform 0.3s ease';
    //   }
    
    //   @HostListener('mouseleave') onMouseLeave() {
    //     this.element.nativeElement.style.transform = 'scale(1)';
    //     this.element.nativeElement.style.transition = 'transform 0.3s ease';
    //   }

}