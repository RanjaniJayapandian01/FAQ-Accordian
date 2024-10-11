export class Plant{
    name : string;
    description : string;
    imgUrl: string;
    price : number;
    rating : number;
    discount : number;
    stock: number;
    qtyOrdered : number;
    type: string;
    /**
     *
     */
    constructor(name: string, description: string, imgUrl : string, price : number, rating : number, discount : number, quantityAvailable : number, type : string) {
      this.name=name;
      this.description=description;
      this.imgUrl= imgUrl;
      this.price=price;
      this.rating= rating;
      this.discount = discount;
      this.stock=quantityAvailable; 
      this.qtyOrdered=1;
      this.type=type;
    }    

}
