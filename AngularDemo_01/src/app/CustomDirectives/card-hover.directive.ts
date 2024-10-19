import { Component, Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[card-hover]',
})

export class CardHoverComponent{
    //private element : ElementRef;
    /**
     *
     */
    constructor( private element : ElementRef, private renderer : Renderer2) {
        
    }
    ngOnInit() {
        // V3      
        //this.renderer.addClass(this.element.nativeElement , 'product-card');
      }

      @HostListener('mouseenter') MouseEnter(){
        this.renderer.addClass(this.element.nativeElement , 'product-card');
      }
      @HostListener('mouseleave') MouseLeave(){
        this.renderer.removeClass(this.element.nativeElement , 'product-card');
      }

     //V2
        // const element = this.element.nativeElement;    
        // element.style.transition = 'transform 0.3s ease';    
        // element.onmouseover = () => {
        //   element.style.transform = 'scale(1.05)';
        // };    
        // element.onmouseleave = () => {
        //   element.style.transform = 'scale(1)';
        // };

      /* // V1:
    @HostListener('mouseenter') onMouseEnter() {
        this.element.nativeElement.style.transform = 'scale(1.05)';
        this.element.nativeElement.style.transition = 'transform 0.3s ease';
      }
    
      @HostListener('mouseleave') onMouseLeave() {
        this.element.nativeElement.style.transform = 'scale(1)';
        this.element.nativeElement.style.transition = 'transform 0.3s ease';
      }
    */


}