import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Categories } from "../models/categories";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoriesService {

  private categoriesUrl = 'https://5b0d33298126c900149975ab.mockapi.io/categories';  // URL to web api
    constructor(private http: HttpClient) { }

    /** GET categories from the server */
    getCategories (): Observable<Categories[]> {
        return this.http.get<Categories[]>(this.categoriesUrl);
    }

    addCate (cate: Categories): Observable<Categories> {
        return this.http.post<Categories>(this.categoriesUrl, cate, httpOptions);
      }

}
