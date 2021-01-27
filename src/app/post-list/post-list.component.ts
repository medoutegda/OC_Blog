import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  postList: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts) => {
        this.postList = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
}

}
