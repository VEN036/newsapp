import { Component, OnInit } from '@angular/core'
//import { LoadingController } from '@ionic/angular';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  
  posts: any;
  // posts = [];
  // page = 1;
  // count = null;

  constructor( 
    private wp: WordpressService,
    private route: ActivatedRoute, 
    //private loadingCtrl: LoadingController 
    ) { }

  ngOnInit() {
    //this.loadPosts();
    let id = this.route.snapshot.paramMap.get('id');
    this.wp.getPostContent(id).subscribe(res => {
      this.posts = res;
    });
  }

  // async loadPosts() {
  //   let loading = await this.loadingCtrl.create({
  //     message: 'Loading Data...'
  //   });
  //   await loading.present();

  //   this.wp.getPosts().subscribe(res => {
  //     this.count = this.wp.totalPosts;
  //     this.posts = res;
  //     loading.dismiss();
  //   });
  // }

  // loadMore(event) {
  //   this.page++;
 
  //   this.wp.getPosts(this.page).subscribe(res => {
  //     this.posts = [...this.posts, ...res];
  //     event.target.complete();
 
  //     // Disable infinite loading when maximum reached
  //     if (this.page == this.wp.pages) {
  //       event.target.disabled = true;
  //     }
  //   });
  // }

  openOriginal() {
    // Add InAppBrowser for app if want
    window.open(this.posts.link, '_blank');
  }
}
