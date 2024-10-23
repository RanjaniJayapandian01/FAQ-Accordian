import { Injectable } from '@angular/core';
import { Plant } from '../models/Plant';
import { userPreferences } from '../models/userPreferences';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  
  private userPreferencesList: userPreferences[];
  constructor() { }  
  getUserPreferences(){
    this.userPreferencesList= [
        {userId: 100, plant: new  Plant(1, "Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0, "Herbs"), IsSaved: true},
        {userId: 100, plant: new  Plant(4, "Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13, "Medicinal Plants"), IsSaved: true}
    ]
    return this.userPreferencesList;
  }


}
