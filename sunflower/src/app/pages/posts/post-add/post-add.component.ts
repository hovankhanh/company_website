import { Component, OnInit } from '@angular/core';
import { Injectable, ErrorHandler } from '@angular/core';
import { ActivatedRoute, Params, Routes } from '@angular/router';
import { Post } from './../../../models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {

	// public post : Post;
  constructor() { }

  ngOnInit() {

  }
	post = new Post();

}
