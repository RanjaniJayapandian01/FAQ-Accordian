import { Component } from "@angular/core";


@Component({
    selector: 'app-header',
    template:
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

 <div class="header-container">
  <div class="header-left">
    <div class="leaf"></div>
    <!-- <img [routerLink]="'plants'" class="logo" src="/assets/plant-shop-logo.jpg" />
      <!--   <img  [routerLink]="'home'" class="logo" src="/assets/greeney.png"> -->
      <span [routerLink]="'home'" class="name text">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
    Greenery</span>
  </div>

  <div class="list-menu-dropdown hidden">
    <nav class="header__inline-menu">
      <ul class="list-menu list-menu--inline">
        <li><a routerLink="home" fragment="testimonials"  class="text">Testimonials</a></li>
        <li><a routerLink="home" fragment="contact"  class="text">Contact</a></li>
        <li><a routerLink="home" fragment="release" class="text">Best Sellers<img style="width: 30px ; height: 25px;" src="https://img.freepik.com/premium-vector/sparkles-icon-isolated-white-background-vector-illustration_736051-308.jpg?w=360"></a></li>
        <li><a  routerLink="plants" routerLinkActive="ractive"  [routerLinkActiveOptions]="{exact: true}"  class="text">Plants</a></li>
        <li><a  routerLink="form" routerLinkActive="ractive"  [routerLinkActiveOptions]="{exact: true}"  class="text">Register User</a></li>
        <li><a  routerLink="blog" routerLinkActive="ractive" class="text">Blog</a></li>      
        <li><a  routerLink="admin" routerLinkActive="ractive" class="text">Admin</a></li>  
        <li><a  routerLink="user" routerLinkActive="ractive" class="text"><i class="fas fa-user"></i></a></li>
        <li><a routerLink="cart" routerLinkActive="ractive" class="text"><i class="fas fa-shopping-cart"></i></a></li>

      </ul>
    </nav>
  </div>


</div>

   
    `,
    styles:
    `
    /* Styling for the header container */
.header-container {

  color: #1b372a;
  display: flex;
  justify-content: space-between; /* Space between logo and menu */
  align-items: center; /* Vertically center items */
  padding: 10px 20px;
}

/* Styling for the left part (logo and name) */
.header-left {
  display: flex;
  align-items: center; /* Vertically center logo and name */
}

.name {
  font-size: 25px;
  margin-left: 10px;
}

.logo {
  width: 100px;
  height: 80px;
  border-radius: 20px;
}

/* Styling for the navigation menu */
.list-menu-dropdown {
  display: flex;
  
}

.header__inline-menu .list-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
 
}

.header__inline-menu .list-menu li {
  margin: 0 15px; /* Add space between menu items */
}

.text {
  color: #1b372a;
  text-decoration: none;
  font-weight: bold;
}
.text::selection {
  font-size: 2rem;  /* Change the font size when selected */
  background-color: #ffcc00;  /* Optional: Change background color to make it more noticeable */
}

 
.ractive{
  font-weight: bold;
  font-size: 20px;  /* Change the font size when selected */
  
  padding: 5px;
  border-radius: 12px;
}


    `
})

export class HeaderComponent{

}