import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-featured-plants',
  templateUrl: './featured-plants.component.html',
  styleUrl: './featured-plants.component.css'
})
export class FeaturedPlantsComponent {
  @ContentChild('TotalFeaturedProducts') totalItems: ElementRef;

  GetChildContent(){
    console.log(this.totalItems.nativeElement);
  }
}
