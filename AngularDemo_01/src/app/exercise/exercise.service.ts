
import { Plant } from "./exercise.component";
export class ExerciseService{
    getPlants(){
        let p1 = new  Plant("Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20);
        let p2 = new  Plant("Cactus", "Prickly Yet Perfect: Embrace the Cactus.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJURuG5JeuMPXR_5dk19bbXNa2R1ryrfuDMfm5tJ_S_dizUwE8y9HED70WUUd7ERwKU&usqp=CAU", 45, 4, 20);
         let arrOfPlant  = [];
        arrOfPlant.push(p1);
        arrOfPlant.push(p2);
        return arrOfPlant;
    }
}