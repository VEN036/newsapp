import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { PostsService } from "../services/posts.service";

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private postSrvc: PostsService) { }
  post$: Observable<any>;
  ngOnInit() {
    this.post$ = this.route.paramMap.pipe(
      //switchMap((params: ParamMap) => this.postSrvc.fetchPosts(params.get("id")))
    )
  }
}
