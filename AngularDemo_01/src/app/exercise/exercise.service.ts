
import {Plant} from './../models/Plant';
export class ExerciseService{
  
    getPlants(){
        let p1 = new  Plant(1,"Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0, "Herbs");
        let p2 = new  Plant(2,"Cactus", "Prickly Yet Perfect: Embrace the Cactus.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJURuG5JeuMPXR_5dk19bbXNa2R1ryrfuDMfm5tJ_S_dizUwE8y9HED70WUUd7ERwKU&usqp=CAU", 45, 4, 20, 13, "Shrubs");
        let p3 = new  Plant(3,"Bay", "Bring home the Bay — where flavor meets fragrance, and beauty meets bounty!", "https://rukminim2.flixcart.com/image/720/864/kpsnzww0/plant-sapling/f/d/p/bay-leaf-tejpatta-plant-1-click-to-purchase-original-imag3y5yzxqggbhb.jpeg?q=60&crop=false", 45, 4, 20, 13, "Herbs");
        let p4 = new  Plant(4,"Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13, "Medicinal Plants");
        let p6 = new Plant(6, "Orchid", "Orchids: Exquisite flowers with elegance and grace.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKg6vmo2u956WpGxw-AW2zVFj9qXem7sXPvg&s", 50.12, 3, 10, 6, "Flowers");
        let p5 = new Plant(5, "Bougainvillea", "Vibrant Colors and Climbing Beauty: The Bougainvillea.", "https://shrigramorganics.com/wp-content/uploads/2020/06/pg-bougainvillea-glabra-pink-800x800-1.jpg", 70, 5, 15, 0, "Climbers");
        // let p7 = new Plant(7, "Lavender", "Lavender: Relaxing aroma, vibrant color, and natural beauty.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxsNQHxgv_vuz9ekfKuqWTONNelT9DmoB0A&s", 42.87, 5, 18, 8, "Herbs");
        // let p8 = new Plant(8, "Rosemary", "Rosemary: Aromatic and versatile, perfect for cooking and wellness.", "https://media.istockphoto.com/id/503780310/photo/rosemary.jpg?s=612x612&w=0&k=20&c=uAcZOP9Chp4vLNx4EJHvmEkhu4HGw6nXL7xxR3aEWk0=", 40.75, 4, 25, 4, "Herbs");
        // let p9 = new Plant(9, "Basil", "Basil: The herb of flavor and aroma, perfect for every dish.", "https://aanmc.org/wp-content/uploads/2021/08/987-1024x681.jpg", 45.34, 5, 16, 7, "Herbs");
        // let p10 = new Plant(10, "Mint", "Mint: Fresh, vibrant, and always refreshing.", "https://assets.thehansindia.com/h-upload/2022/04/14/1600x960_1286916-mint-9.webp", 38.23, 4, 20, 12, "Herbs");
        // let p11 = new Plant(11, "Ivy", "Enduring Green: Ivy’s Climbing Charm for Any Space.", "https://cdn.megawecare.com/GHBY/Featured-Images/1722922972809-Ivy_Leaf_Health_Benefits_Uses_and_Natural_Remedies_876X400.webp", 55, 3, 12, 5, "Climbers");
        // let p13 = new Plant(13, "Wisteria", "Timeless Elegance: Wisteria’s Cascading Blooms and Fragrance.", "https://plantshub.in/wp-content/uploads/2024/03/e2cf16f3-8cb9-4f14-b4d6-418158576b2a-1.webp", 90, 6, 25, 3, "Creepers");
        // let p12 = new Plant(12, "Morning Glory", "A Splash of Color: Morning Glory Climbs with Grace and Charm.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZd-bFm-9ThoZvn7-sd8d7YtUezrSZ7O5tw&s", 45, 4, 20, 10, "Creepers");
        

        // let p5 = new  Plant("Lily", "Elegance in Every Petal: Discover the Beauty of Lilies.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKBl33h6X7SIGljJqmtrrk6SAvsNvK1inHA&s", 50.66, 4, 20, 0);
        // let p6 = new  Plant("Cactus", "Prickly Yet Perfect: Embrace the Cactus.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWCJURuG5JeuMPXR_5dk19bbXNa2R1ryrfuDMfm5tJ_S_dizUwE8y9HED70WUUd7ERwKU&usqp=CAU", 45, 4, 20, 13);
        // let p7 = new  Plant("Bay", "Bring home the Bay — where flavor meets fragrance, and beauty meets bounty!", "https://rukminim2.flixcart.com/image/720/864/kpsnzww0/plant-sapling/f/d/p/bay-leaf-tejpatta-plant-1-click-to-purchase-original-imag3y5yzxqggbhb.jpeg?q=60&crop=false", 45, 4, 20, 13);
        // let p8 = new  Plant("Aloe Vera", "Aloe Vera: Your skin’s best friend, nature’s healing blend!", "https://images.ctfassets.net/3s5io6mnxfqz/7nvW8423HBv19umqrGTNTT/0e2f0a3265ea538cad8510b2642caf42/AdobeStock_298307267_2.jpeg?w=828", 45, 4, 20, 13);

         let arrOfPlant  = [];

        arrOfPlant.push(p1);
        arrOfPlant.push(p2);
        arrOfPlant.push(p3);
        arrOfPlant.push(p4);
         arrOfPlant.push(p6);
         arrOfPlant.push(p5);
        //  arrOfPlant.push(p7);
        //  arrOfPlant.push(p8);
        //  arrOfPlant.push(p9);
        //  arrOfPlant.push(p10);
        //  arrOfPlant.push(p11);
        //  arrOfPlant.push(p12);
        //  arrOfPlant.push(p13);


        return arrOfPlant;
    }

    getFeaturedPlants(){
        // const featuredPlants = [
        //     {
        //       name: 'Monstera Deliciosa',
        //       description: 'A popular houseplant known for its large, glossy leaves with unique splits.',
        //       imgUrl: 'https://images.unsplash.com/photo-1570795682231-7632e1fdfd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3MF8xfGFsbHwxfHx8fHx8fHwxNjE1MjEyNzE1&ixlib=rb-1.2.1&q=80&w=400',
        //       price: 39.99,
        //       rating: 4.7,
        //       discount: 10, // 10%
        //       stock: 25,
        //       qtyOrdered: 0,
        //       type: 'Tropical'
        //     },
        //     {
        //       name: 'Snake Plant',
        //       description: 'A hardy plant that is nearly indestructible, perfect for beginners.',
        //       imgUrl: 'https://example.com/snake-plant.jpg',
        //       price: 19.99,
        //       rating: 4.5,
        //       discount: 5, // 5%
        //       stock: 40,
        //       qtyOrdered: 0,
        //       type: 'Succulent'
        //     },
        //     {
        //       name: 'Peace Lily',
        //       description: 'A beautiful flowering plant that thrives in low light and helps purify the air.',
        //       imgUrl: 'https://example.com/peace-lily.jpg',
        //       price: 29.99,
        //       rating: 4.8,
        //       discount: 15, // 15%
        //       stock: 15,
        //       qtyOrdered: 0,
        //       type: 'Flowering'
        //     },
        //     {
        //       name: 'Aloe Vera',
        //       description: 'A succulent plant with medicinal properties, easy to care for and perfect for any home.',
        //       imgUrl: 'https://example.com/aloe-vera.jpg',
        //       price: 14.99,
        //       rating: 4.6,
        //       discount: 0, // No discount
        //       stock: 30,
        //       qtyOrdered: 0,
        //       type: 'Succulent'
        //     },
        //     {
        //       name: 'Fiddle Leaf Fig',
        //       description: 'A trendy indoor plant known for its large, violin-shaped leaves.',
        //       imgUrl: 'https://example.com/fiddle-leaf-fig.jpg',
        //       price: 49.99,
        //       rating: 4.4,
        //       discount: 20, // 20%
        //       stock: 10,
        //       qtyOrdered: 0,
        //       type: 'Tropical'
        //     }
        //   ];
        const featuredPlants = [
            {
              id: 5,
              name: 'Monstera Deliciosa',
              description: 'A popular houseplant known for its large, glossy leaves with unique splits.',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaVD0-jia4OQ2R4gu8HWI9E4otcCiRVhq6Q&s',
              price: 39.99,
              rating: 4.7,
              discount: 10, // 10%
              stock: 25,
              qtyOrdered: 0,
              type: 'Tropical'
            },
            {
              id: 6,
              name: 'Snake Plant',
              description: 'A hardy plant that is nearly indestructible, perfect for beginners.',
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvieFoyosAUAWA-BgXVUt8j7HwCxfy0l0Gw&s',
              price: 19.99,
              rating: 4.5,
              discount: 5, // 5%
              stock: 40,
              qtyOrdered: 0,
              type: 'Succulent'
            },
            {
              id: 7,
              name: 'Peace Lily',
              description: 'A beautiful flowering plant that thrives in low light and helps purify the air.',
              imgUrl: 'https://wridentrnaly.store/wp-content/uploads/2024/08/product01_8.webp',
              price: 29.99,
              rating: 4.8,
              discount: 15, // 15%
              stock: 15,
              qtyOrdered: 0,
              type: 'Flowering'
            }       
          
          ];
          
        return featuredPlants;
    }
}