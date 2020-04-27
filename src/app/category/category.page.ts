import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public category : Array<any>;
  
  constructor( ) { }

  ionViewdidLoad() {
    this.declareCategory();
  }

  declareCategory() : void
  {
    this.category = [
      {
        name : 'World',
        description: 'World News Data',
        image:'/assets/Images/world.png',
        type: 'news'
      },
      {
        name: 'Cinema',
        description: 'Cinema News Data',
        image:'/assets/Images/cinema.png',
        type: 'news'
      },
      {
        name: 'Sports',
        description: 'Sports News data',
        image:'/assets/Images/sports.png',
        type:'news'
      },
      {
        name: 'Politics',
        description: 'Political News Data',
        image: '/assets/Images/politics.png',
        type: 'news'
      }
    ];
  }

  filterCategory(param : any) : void
  {
    this.declareCategory();
    let val : string = param;
    if (val.trim() !== '')
    {
      this.category = this.category.filter((item) =>
      {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLocaleLowerCase()) > -1;
      })
    }
  }

  onFilter(category : string) : void
  {
    this.declareCategory();
    if (category.trim() !== 'all')
    {
      this.category = this.category.filter((item) => 
      {
        return item.type.toLowerCase().indexOf(category.toLowerCase()) > -1;
      })
    }
  }

  ngOnInit() {
    
  }
}
