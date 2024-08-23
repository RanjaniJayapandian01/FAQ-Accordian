import {Component} from '@angular/core';

@Component({
    selector: "rating",
    styleUrl: './star.component.css',
    template:`
    <ng-container *ngIf="rating<1; else elseBlock"><app-star></app-star> </ng-container>
    <ng-template #elseBlock> <app-starfill></app-starfill><ng-template>
    `
})
export class RatingComponent{
    rating : number=0;
    onClick(ratingValue: any){
        this.rating=ratingValue;
    }
}