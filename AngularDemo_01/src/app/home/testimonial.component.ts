import { Component } from "@angular/core";

@Component({
    selector: 'app-tm',
    template:
    `
   
    <body>
     <header class="testimonial-header">
    <h3><b>What Our Customer Thinks</b></h3>
    </header>

    <section class="testimonial-section">
    <div class="testimonial">
      <img src="https://via.placeholder.com/80" alt="Customer 1">
      <div class="name">John Doe</div>
      <div class="role">Gardener Enthusiast</div>
      <div class="review">
        <p>"The plants I ordered were in great condition, and the delivery was fast! The variety they offer is amazing!"</p>
      </div>
      <div class="plant">Favorite Plant: Snake Plant</div>
    </div>

    <div class="testimonial">
      <img src="https://via.placeholder.com/80" alt="Customer 2">
      <div class="name">Jane Smith</div>
      <div class="role">Interior Designer</div>
      <div class="review">
        <p>"I always recommend this plant shop to my clients. Their plants are healthy and last long, and the customer service is excellent."</p>
      </div>
      <div class="plant">Favorite Plant: Fiddle Leaf Fig</div>
    </div>

    <div class="testimonial">
      <img src="https://via.placeholder.com/80" alt="Customer 3">
      <div class="name">Sara Lee</div>
      <div class="role">Homeowner</div>
      <div class="review">
        <p>"I love how easy it is to shop for plants here. The website is easy to navigate, and the plants are always packed carefully."</p>
      </div>
      <div class="plant">Favorite Plant: Peace Lily</div>
    </div>
    
     <div class="testimonial">
      <img src="https://via.placeholder.com/80" alt="Customer 4">
      <div class="name">Sara Lee</div>
      <div class="role">Homeowner</div>
      <div class="review">
        <p>"I love how easy it is to shop for plants here. The website is easy to navigate, and the plants are always packed carefully."</p>
      </div>
      <div class="plant">Favorite Plant: Peace Lily</div>
    </div>

     <div class="testimonial">
      <img src="https://via.placeholder.com/80" alt="Customer 5">
      <div class="name">Sara Lee</div>
      <div class="role">Homeowner</div>
      <div class="review">
        <p>"I love how easy it is to shop for plants here. The website is easy to navigate, and the plants are always packed carefully."</p>
      </div>
      <div class="plant">Favorite Plant: Peace Lily</div>
    </div>

  </section>
  
 
</body>
    `,
    styles:
    `
    .testimonial-header{
    display: flex;
      justify-content: center;
      margin: 0px;
      padding: 0px;
    }
    .testimonial-decor-img1{
      background-color: black;
      padding: 10px;
      float: left;
    }

    .testimonial-section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 50px auto;
      width: 100%;
      background-image: url('https://t3.ftcdn.net/jpg/02/08/01/94/360_F_208019473_kHWfmXIhUBkeIcH4W9X8y0meESykOW1z.jpg');
      background-size: cover; /* This will cover the section */
      background-repeat: no-repeat;
      padding: 20px;
    }

    .testimonial {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 30px;
      margin: 15px;
      width: 300px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .testimonial:hover {
      transform: translateY(-10px);
    }

    .testimonial img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      margin-bottom: 20px;
    }

    .testimonial .name {
      font-family: 'Quicksand', sans-serif;
      font-size: 1.2em;
      color: #2d3a2a;
      font-weight: 600;
    }

    .testimonial .role {
      font-size: 0.9em;
      color: #777;
      margin-bottom: 20px;
    }

    .testimonial .review {
      font-size: 1em;
      color: #555;
      line-height: 1.6;
    }

    .testimonial .review p {
      margin-bottom: 20px;
    }

    .testimonial .plant {
      margin-top: 10px;
      font-size: 1.1em;
      color: #4CAF50;
      font-weight: bold;
    }

    .testimonial-section h2 {
      text-align: center;
      font-size: 2.5em;
      color: #4CAF50;
      margin-bottom: 40px;
      font-family: 'Quicksand', sans-serif;
    }

    `
})



export class TestimomialComponent{

}