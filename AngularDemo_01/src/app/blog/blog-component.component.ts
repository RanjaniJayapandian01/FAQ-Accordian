import { Component } from '@angular/core';
import {BlogPost} from './../models/BlogPost';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrl: './blog-component.component.css'
})
export class BlogComponentComponent {
  posts: BlogPost[] = [
    {
      title: 'Caring for Indoor Plants',
      content: 'Indoor plants need a different approach to care...',
      category: 'Indoor',
      date: new Date('2023-07-20') // Change the date as needed
    },
    {
      title: 'Best Outdoor Plants for Your Garden',
      content: 'Outdoor plants thrive in sunlight and fresh air...',
      category: 'Outdoor',
      date: new Date('2022-10-10') // Change the date as needed
    },
    {
      title: 'Succulent Care Tips',
      content: 'Succulents require minimal watering...',
      category: 'Succulent',
      date: new Date('2022-01-09') // Change the date as needed
    },
    {
      title: 'Flowering Plants to Brighten Your Home',
      content: 'Flowering plants can add beauty to any space...',
      category: 'Flowering',
      date: new Date('2024-08-20') // Change the date as needed
    }
  ];

  getCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  }

  compareDates(date : Date): boolean{
    if(date > new Date('2023-01-01'))
      return true;
    else
     return false;
  }

}
