import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postConent1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra convallis augue, sed commodo arcu ornare quis.';
  postConent2 = 'Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin.';
  postConent3 = 'Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl.';
  post1: Post = new Post('Mon premier post', this.postConent1, 2);
  post2: Post = new Post('Mon deuxième post', this.postConent1, 0);
  post3: Post = new Post('Mon troisième post', this.postConent1, -1);


  postsSubject = new Subject<Post[]>();
  private posts: Array<Post> = [this.post1, this.post2, this.post3];

  constructor() { }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  loveIt(post: Post) {
    this.posts.find(obj => obj === post).loveIts++;
    this.emitPostSubject();
  }

  dontLoveIt(post: Post) {
    this.posts.find(obj => obj === post).loveIts--;
    this.emitPostSubject();
  }

  removePost(post: Post) {
    this.posts.splice(this.posts.findIndex(obj => obj === post), 1);
    this.emitPostSubject();
  }

  addNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPostSubject();
  }

}
