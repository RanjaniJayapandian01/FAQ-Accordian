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
      category: 'Indoor'
    },
    {
      title: 'Best Outdoor Plants for Your Garden',
      content: 'Outdoor plants thrive in sunlight and fresh air...',
      category: 'Outdoor'
    },
    {
      title: 'Succulent Care Tips',
      content: 'Succulents require minimal watering...',
      category: 'Succulent'
    },
    {
      title: 'Flowering Plants to Brighten Your Home',
      content: 'Flowering plants can add beauty to any space...',
      category: 'Flowering'
    }
  ];

  getCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  }

}
