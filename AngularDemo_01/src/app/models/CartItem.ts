export class CartItem{
    private static nextId: number = 1; // Static variable to hold the next ID
    id : number;
    name : string;
    quantity: number;
    price: number;
    discount: number;
    img: string;
  
    constructor(img: string, name: string, price : number, quantity : number, discount: number) {
      this.img=img;
      this.id = CartItem.nextId++; // Assign the next ID and increment
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.discount = discount;
  
    }
  }