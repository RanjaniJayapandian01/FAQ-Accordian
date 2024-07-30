import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productArray = ["Books", "Home Appliances", "Electronics"];
  showMessage : boolean= true;
  message: string = 'Hello, this message is conditionally displayed!';
  get styles() {
    return {
      'background-color':  'green',
      'color': 'black',
      'margin': '80px'
    };
  }
}
