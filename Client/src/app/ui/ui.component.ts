import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { Products } from './product';
import { Client } from './client';
import { Hero } from './hero';
import { UiService } from './ui.service';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
 posts: Post[] = [];
 product:Products[]=[];
 client:Client[]=[];
 heroes:Hero[]=[];
  constructor(
  	private uiService: UiService 
  	) { }

  ngOnInit() {
  	this.getBooks();
  	this.getProducts();
  	this.getClient();

  }

  getBooks(): void {
  	this.uiService.getBooks().subscribe(posts => this.posts = posts);
  }
  
  getProducts(): void {
  	this.uiService.getProducts().subscribe(product => this.product = product);
  }
  getClient(): void {
  	this.uiService.getClients().subscribe(client => this.client = client);
  }

  add(email: string,attachfile: string): void {
  email = email.trim();
  attachfile = attachfile.trim();
  if (!email &&!attachfile) { return; }
  this.uiService.addHero({email,attachfile } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
}
