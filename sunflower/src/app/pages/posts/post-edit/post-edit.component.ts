import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../posts.service';
import { Post } from './../../../models/post';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

	public posts: Post;

  constructor(
  	private route: ActivatedRoute,
  	private PostsService: PostsService,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.posts = new Post();
  	this.LoadData();
  }

  LoadData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.PostsService.getPost(id).subscribe(post => this.posts = post);
  }

  goBack(): void {
	  this.location.back();
	}

  save(): void {
   	this.PostsService.updatePost(this.posts)
   	.subscribe(() => this.goBack()) return;
 	}

}
