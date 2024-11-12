import { Component } from "@angular/core";


@Component({
    selector: 'app-header',
    template:
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

 <div class="header-container">
  <div class="header-left">
    <div class="leaf"></div>
    <img [routerLink]="'plants'" class="logo" src="/assets/plant-shop-logo.jpg" />
    <span [routerLink]="'plants'" class="name text">Greenery</span>
  </div>

  <div class="list-menu-dropdown hidden">
    <nav class="header__inline-menu">
      <ul class="list-menu list-menu--inline">
        <li><a  routerLink="home" routerLinkActive="ractive"  [routerLinkActiveOptions]="{exact: true}"  class="text">Plants</a></li>
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
  width: 60px;
  height: 50px;
}

/* Styling for the navigation menu */
.list-menu-dropdown {
  display: flex;
  justify-content: flex-end; /* Align the menu items to the right */
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
  color: #165580;
  text-decoration: none;
}

.text:hover {
  text-decoration: underline;
}

.ractive{
  font-weight: bold;

}

    `
})

export class HeaderComponent{

}