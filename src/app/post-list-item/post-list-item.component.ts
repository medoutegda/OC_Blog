import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor( private postService: PostService ) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.loveIt(this.post);
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.post);
  }

  onRemove() {
    this.postService.removePost(this.post);
  }

  isLoved() {
    if (this.post.loveIts > 0) {
      return true;
    } else if (this.post.loveIts > 0) {
      return false;
    }
  }

}
