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
}