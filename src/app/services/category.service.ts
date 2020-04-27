import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private data = [
    {
      category: 'World',
      expanded: true,
      news: [
        { id: 0, headline: 'headline 1', content: 'content 1' },
        { id: 1, headline: 'headline 2', content: 'content 2' },
        { id: 2, headline: 'headline 3', content: 'content 3' },
        { id: 3, headline: 'headline 4', content: 'content 4' }
      ]
    },
    {
      category: 'Cinema',
      news: [
        { id: 4, headline: 'headline 5', content: 'content 5' },
        { id: 5, headline: 'headline 6', content: 'content 6' },
        { id: 6, headline: 'headline 7', content: 'content 7' }
      ]
    },
    {
      category: 'Sports',
      news: [
        { id: 7, headline: 'headline 8', content: 'content 8' },
        { id: 8, headline: 'headline 9', content: 'content 9' },
        { id: 9, headline: 'headline 10', content: 'content 10' }
      ]
    }
  ];

  private category = [];

  constructor() { }

  getNews() {
    return this.data;
  }

  getCategory() {
    return this.category;
  }

  addNews(news) {
    this.category.push(news);
  }
}
