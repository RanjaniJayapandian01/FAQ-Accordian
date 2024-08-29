import { Component, Input } from "@angular/core";
import { ProductService } from "./products.service";
//import{ ProductService} from "/.products.service";
@Component({
    selector: 'app-article',
    styles: [
        ` media{
            margin-bottom: 20px;
        }`
    ],
    template: `
        <div class="media">
        <img src="{{data.imageUrl}}" class="mr-3" alt="..."/>
        <div class="media-body">
                <h5 class="mt-0"> {{data.productName}}</h5>
                {{ data.releasedDate | date : "mm/dd/yy"}}
                <rating [rating-value]="data.rating" [numOfReviews]="data.numOfReviews"></rating>
                <div [ngSwitch]="data.rating">
                    <div *ngSwitchCase="1">Poor</div>
                    <div *ngSwitchCase="2">Fair</div>
                    <div *ngSwitchCase="3">Good</div>
                    <div *ngSwitchCase="4">Very Good</div>
                    <div *ngSwitchCase="5">Excellent</div>
                    <div *ngSwitchDefault>Not Rated</div>
                </div>
                <br>
                {{data.description | truncate : 15}}
        </div>
        </div>
    `
})

export class ArticleComponent{
    @Input() data : any;
    prodList: any;
    /**
     *
     */
    // constructor( productService : ProductService) {
    //     this.prodList=productService.getProductsV2();
        
    // }
}