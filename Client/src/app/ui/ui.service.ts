import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Post } from './post';
import { Products } from './product';
import { Client } from './client';
import { Hero } from './hero';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UiService {
private booksUrl = 'https://5b0d377f8126c900149975b8.mockapi.io/Post';
private productUrl = 'https://5b0d377f8126c900149975b8.mockapi.io/Products';
private clientUrl = 'https://5b0d377f8126c900149975b8.mockapi.io/client';
private heroesUrl = 'https://5b0d377f8126c900149975b8.mockapi.io/hero';
  constructor(
  	private http: HttpClient) { }

  getBooks(): Observable<Post[]> {
    return this.http.get<Post[]>(this.booksUrl);
  }
 getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.productUrl);
  }
 getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl);
  }

  addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions);
}
}
