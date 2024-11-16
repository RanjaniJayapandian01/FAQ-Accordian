import {Component, Input} from '@angular/core';

@Component({
    selector: "rating",
    styles: [
        'app-star{color : orange}',  'app-starfill{color: orange}'
    ],
    template:`
  <ng-container *ngIf="rating<1; else elseBlock1" ><app-star (click) = onClick(1)></app-star>
  </ng-container>
  <ng-template #elseBlock1> <app-starfill (click) = onClick(0)></app-starfill></ng-template>
  <ng-container *ngIf="rating<2; else elseBlock2" ><app-star (click) = onClick(2)></app-star>
  </ng-container>
  <ng-template #elseBlock2> <app-starfill (click) = onClick(1)></app-starfill></ng-template>
  <ng-container *ngIf="rating<3; else elseBlock3" ><app-star (click) = onClick(3)></app-star>
  </ng-container>
  <ng-template #elseBlock3> <app-starfill (click) = onClick(2)></app-starfill></ng-template>
  <ng-container *ngIf="rating<4; else elseBlock4" ><app-star (click) = onClick(4)></app-star> 
  </ng-container>
  <ng-template #elseBlock4> <app-starfill (click) = onClick(3)></app-starfill></ng-template>
  <ng-container *ngIf="rating<5; else elseBlock5" ><app-star (click) = onClick(5)></app-star>
  </ng-container>
  <ng-template #elseBlock5> <app-starfill (click) = onClick(4)></app-starfill></ng-template>
<!--{{numOfReviews}}-->
    ` 

})
export class RatingComponent{
    //Event Binding
    @Input('rating-value') rating : number=0;
    @Input() numOfReviews=0;

    onClick(ratingValue: any){
        this.rating=ratingValue;
    }

    // input, output directives

}