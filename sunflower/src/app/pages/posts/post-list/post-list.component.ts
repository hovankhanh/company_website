import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../posts.service';
import { Post } from './../../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	public posts: Post[];

  constructor(private PostsService: PostsService) { }

  ngOnInit() {
  	this.getPosts();
  }

  getPosts(): void {
  	this.PostsService.getPosts().subscribe(posts => this.posts = posts);
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.PostsService.deletePost(post).subscribe();
  }

}
