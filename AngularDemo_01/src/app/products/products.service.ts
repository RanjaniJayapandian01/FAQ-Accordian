import {Product} from './products.component';
export class ProductService{
    /**
     *
     */
    products: Product[] = [];
    constructor() {
    this.products.push(new Product("Learning Angular", true));
    this.products.push(new Product("Pro Typescript", false));
    this.products.push(new Product("ASP.NET", false));      
        
    }
    getProducts() : Product[]{
        return this.products
    }

    getProductsV2() {
        return [
        { 
           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh43Ngze5aBiyqCJWTJwyA1UyMncJ3Xcs1Fw&s",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
            rating: 4,
            numOfReviews: 2
        },
        { 
           imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BhSrDQbUH2ALG35Erin1K2V2L4iXEg-Egg&s",
            productName: "Product 2",
            releasedDate: "October 31, 2016",
            description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
            rating: 2,
            numOfReviews: 12          
        },
        {                 
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PMJKS9sbGqi8X45YjLZxJwh7-qNCZxoXqg&s",
            productName: "Product 3",
            releasedDate: "July 30, 2016",
            description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",        
            rating: 5,
            numOfReviews: 2
        }];
    }    

}