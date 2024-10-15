import { Component, ContentChildren, ElementRef, Input, QueryList } from "@angular/core";

@Component({
    selector: 'bs-jumbotron',
    template: 
    `
    <div class="jumbotron">
    <h1 class="display-4"> Hello, world</h1>
    <p class="lead"> This is a simple hero unit </p>
    <ng-content select=".Example"></ng-content>
    <ng-content select=".header"></ng-content>
    <ng-content select=".body"></ng-content>
    <hr class="my-4">
    <h6>{{title}}</h6>
    <p>It uses utility classes for typography and spacing ..</p>
    <ng-content select=".description"></ng-content>
    <a class="btm btn-primary btn-lg" href="#" role="button">Learn More</a>
    <button  (click)="ShowElements()">Show More</button>
    </div>
    `,
})

export class JumbotronComponent{
       @Input('title') title : string ="Hey!!!";

       @ContentChildren('bsjumbotrondiv') divElementsFromProducts : QueryList<ElementRef>;
       @ContentChildren('jumboComponent') jumbocomponents : QueryList<JumbotronComponent>;

       ShowElements(){
        this.divElementsFromProducts.forEach(element => {
            console.log(element.nativeElement);
        });

        this.divElementsFromProducts.forEach(
            element => {
                console.log(element.nativeElement);
            }
        );

       }
}