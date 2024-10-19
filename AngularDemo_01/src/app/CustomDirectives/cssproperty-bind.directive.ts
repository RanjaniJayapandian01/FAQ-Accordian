import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[pb-directive]'
})
export class PropertyDirective{

    //    @Input('pb-directive') bGColor  : string="#ff5733";
    //    @Input('txtColor') txtColor: string = "#0a0a08";
    //    @Input('title') title: string="this is directive";

    @Input('pb-directive') styleDirective: {
        bGColor: string,
        txtColor: string
        title?: string
    }
        constructor(private element: ElementRef, private renderer : Renderer2){
        }

        ngOnInit(){
            this.renderer.setStyle(this.element.nativeElement,'backgroundColor', this.styleDirective.bGColor);
            this.renderer.setStyle(this.element.nativeElement,'color', this.styleDirective.txtColor);
            this.renderer.setAttribute(this.element.nativeElement, 'title', 'this is directive title');
        }
}