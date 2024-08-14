import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
    title : string = 'We have reached Book Component';
    display : boolean = false;
    onClick(){
      this.display =true;
    }
  }

