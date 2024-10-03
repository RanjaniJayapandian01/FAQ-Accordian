
import { Plant } from "./exercise.component";
export class ExerciseService{
    getPlants(){
        let p1 = new  Plant("Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0, "Herbs");
        let p2 = new  Plant("Cactus", "Prickly Yet Perfect: Embrace the Cactus.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJURuG5JeuMPXR_5dk19bbXNa2R1ryrfuDMfm5tJ_S_dizUwE8y9HED70WUUd7ERwKU&usqp=CAU", 45, 4, 20, 13, "Shrubs");
        let p3 = new  Plant("Bay", "Bring home the Bay — where flavor meets fragrance, and beauty meets bounty!", "https://rukminim2.flixcart.com/image/720/864/kpsnzww0/plant-sapling/f/d/p/bay-leaf-tejpatta-plant-1-click-to-purchase-original-imag3y5yzxqggbhb.jpeg?q=60&crop=false", 45, 4, 20, 13, "Herbs");
        let p4 = new  Plant("Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13, "Medicinal Plants");

        // let p5 = new  Plant("Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0);
        // let p6 = new  Plant("Cactus", "Prickly Yet Perfect: Embrace the Cactus.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJURuG5JeuMPXR_5dk19bbXNa2R1ryrfuDMfm5tJ_S_dizUwE8y9HED70WUUd7ERwKU&usqp=CAU", 45, 4, 20, 13);
        // let p7 = new  Plant("Bay", "Bring home the Bay — where flavor meets fragrance, and beauty meets bounty!", "https://rukminim2.flixcart.com/image/720/864/kpsnzww0/plant-sapling/f/d/p/bay-leaf-tejpatta-plant-1-click-to-purchase-original-imag3y5yzxqggbhb.jpeg?q=60&crop=false", 45, 4, 20, 13);
        // let p8 = new  Plant("Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13);

         let arrOfPlant  = [];

        arrOfPlant.push(p1);
        arrOfPlant.push(p2);
        arrOfPlant.push(p3);
        arrOfPlant.push(p4);
        // arrOfPlant.push(p5);
        // arrOfPlant.push(p6);
        // arrOfPlant.push(p7);
        // arrOfPlant.push(p8);

        return arrOfPlant;
    }
}