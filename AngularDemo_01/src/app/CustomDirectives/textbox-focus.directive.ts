import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocusEffect]'
})
export class TextboxFocusDirectiveTsDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
   }
   @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';


   @HostListener('mouseenter') FocusOn(){
    this.backgroundColor='#ffcccb';
   }

   @HostListener('mouseleave') BlurOn(){
    this.backgroundColor='transparent';
   }

}
