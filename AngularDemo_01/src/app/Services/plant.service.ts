import { Injectable } from '@angular/core';
import { Plant } from '../models/Plant';
import { userPreferences } from '../models/userPreferences';
import { CartItem } from '../models/CartItem';
import { CheckOutItem } from '../models/CheckOutItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  
  //private userPreferencesList: userPreferences[];
  private userPreferencesList = [  
    {userId: 1, plant: new  Plant(1, "Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0, "Herbs"), IsSaved: true},
      {userId: 2, plant: new  Plant(4, "Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13, "Medicinal Plants"), IsSaved: true}
  ];
  constructor() { }  
  getUserPreferences(){  
    return this.userPreferencesList;
  }

  updateUserPreferences(list: userPreferences[]){
    this.userPreferencesList=list;
  }

 cartItem: CartItem[]=[

 ];
  getUserCartItems(){
    return this.cartItem;
  }

  setUserCartItems(cObj : CartItem){
    this.cartItem.push(cObj);
  }


  orders: CheckOutItem[]=[];
  getUserOrderedItems(){
    return this.orders;
  }

  setUserOrderedItems(cObj : CheckOutItem[]){
    this.orders=(cObj);
  }


  // getResolveData(): Observable<userPreferences[]>{
  //   return new Observable((sub)=>{
  //     (setTimeout(()=>{sub.next(this.getUserPreferences());}, 5000));
  //   })
  // }

  getResolveData(): Observable<any> {
    return new Observable((sub) => {
      setTimeout(() => {
        const data = this.getUserPreferences();  // Assuming this is a synchronous method
        sub.next(data);  // Emit the result
        sub.complete();   // Complete the Observable
      }, 5000);  // Wait for 5 seconds before executing getUserPreferences()
    });
  }
  
}
