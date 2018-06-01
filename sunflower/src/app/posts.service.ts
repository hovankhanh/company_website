import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { Post } from './models/post';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsService {

	private postsUrl = 'https://5b0e24d23c5c110014145b48.mockapi.io/posts/posts';
	public posts: Post[] = [];

  constructor(private http: HttpClient) { }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  /** GET post by id */
	getPost(id: number): Observable<Post> {
  	const url = `${this.postsUrl}/${id}`;
  	return this.http.get<Post>(url);
	}

	/** POST: add a new post to the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  /** DELETE: delete the post from the server */
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = '${this.postsUrl}/${id}';
  }

	/** PUT: update the post on the server */
  updatePost(post: Post): Observable<any> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.put(url, post, httpOptions);
  }
}
