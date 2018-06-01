import { Component, OnInit } from '@angular/core';
import { Injectable, ErrorHandler } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import { PostsService } from './../../../posts.service';
import { Post } from './../../../models/post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {

	public post : Post[];

  constructor(private PostsService: PostsService, private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
	  this.location.back();
	}

	add(title: string, content: string, date_post: string): void {
	  title = title.trim();
	  content = content.trim();
	  date_post = date_post.trim();
	  if (!title && !content && !date_post) { return; }
	  this.PostsService.addPost({ title, content, date_post } as Post)
	    .subscribe(post => {
	      this.post.push(post);
    });
	}

}
