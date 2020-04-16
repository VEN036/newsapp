import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public category$: Observable<any>;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private postSrvc: PostsService) { }

  ngOnInit() {
    this.category$ = this.postSrvc.fetchPostCategories();
  }

}
