import { Component, ContentChild, ElementRef, Input, SimpleChange, ViewChild } from "@angular/core";

@Component({
    selector: 'app-demo',
    template: 
    `
    <h2>{{name}}</h2>
    <p #paraEle> This is a paragraph </p>
    <ng-container *ngFor="let i of arr">
        <p>{{i}}</p>
    </ng-container>
    <ng-content></ng-content>

    <!-- ngAfterViewInit -->
    <p #paraForNAVI>This is demo para test for nAVI</p>
    `,
    styles:''
})

export class DemoComponent{
    @Input() name : string;
    @Input() arr: string[];
    @ContentChild('demodivRef') divref : ElementRef;
    @ViewChild('paraEle') para : ElementRef;
    @ViewChild('paraForNAVI') pNavi: ElementRef;

    constructor(){
        console.log('ctor: Demo Component');
        console.log('ctor demo name property: ',this.name);
    }
    // ngOnChanges(input: SimpleChange){
    //     // console.log("NgOnChanges Hook is called");
    //     // console.log('NgOnChanges demo name property:',this.name);
    //     // console.log('NgOnChanges demo name change detect:',input);
    //     console.log('NgOnChanges demo name change detect:',input);
    //     //console.log("ngOnInit", this.para.nativeElement.innerHTML); // not possible  // does not work 'Cannot read properties of undefined' para is a viewchild prop
    // }
    // ngOnInit(){
    //     console.log("ngOnInit Hook is called");
    //     //console.log("ngOnInit", this.para.nativeElement.innerHTML); // not possible  // does not work 'Cannot read properties of undefined' para is a viewchild prop
    //   //  console.log("ngOnInit",this.divref.nativeElement);
    // }

    // ngDoCheck(){
    //     console.log("ngDoCheck Hook is called");

    // }
    
    // ngAfterContentInit(){
    //     console.log("ngAfterContentInit Hook is called");
    //     console.log("ngAfterContentInit",this.divref.nativeElement);
    // }

    // ngAfterContentChecked(){
    //     console.log("ngAfterContentChecked Hook is called");
    //    // console.log("ngAfterContentChecked check NAVI property",this.pNavi.nativeElement); // does not work 'Cannot read properties of undefined' pNavi is initiliased before ngAfterViewInit
    // }


    ngAfterViewInit(){
        console.log("ngAfterViewInit Hook is called in demo component");
        console.log("ngAfterViewInit check ViewChild property",this.pNavi.nativeElement);
    }
    ngAfterViewChecked(){
        console.log('ngAfterViewChecked called for:', this.constructor.name);
        console.log("ngAfterViewChecked Hook is called in demo component");
        console.log("ngAfterViewChecked check ViewChild property",this.pNavi.nativeElement);
    }
    ngOnDestroy(){
        console.log('ngOnDestroy called for:', this.constructor.name);
    }
}