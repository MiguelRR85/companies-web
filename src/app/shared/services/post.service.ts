import { Post } from '../models/post.model';
import { ApiError } from '../models/api-error.model';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PostService extends BaseApiService {

  private static readonly POST_API = `${BaseApiService.BASE_API}/posts`;
  private static readonly COMPANY_API = `${BaseApiService.BASE_API}/companies`;
  private posts: Array <Post> = [];
  private postsSubject: Subject <Array <Post>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(companyId: string): Observable <Array<Post> | ApiError > {
    return this.http.get<Array<Post>>(`${PostService.POST_API}/${companyId}`,  BaseApiService.defaultOptions)
      .pipe(
        map((posts: Array<Post>) => {
          posts = posts.map(post => Object.assign(new Post(), post));
          this.posts = posts;
          this.notifyPostsChanges();
          return posts;
        }),
        catchError(this.handleError)
      );
  }

  create(companyId: string, post: Post): Observable < Post | ApiError > {
    return this.http.post<Post>(`${PostService.POST_API}/${companyId}`, post,  BaseApiService.defaultOptions)
      .pipe(
        map((post: Post) => {
          post = Object.assign(new Post(), post);
          this.posts.push(post);
          this.notifyPostsChanges();
          return post;
        }),
        catchError(this.handleError));
  }  
  
  get(postId: string, companyId: string): Observable<Post | ApiError> {
    return this.http.get<Post>(`${PostService.POST_API}/${postId}/company/${companyId}`, BaseApiService.defaultOptions)
      .pipe(
        map((post: Post) => Object.assign(new Post(), post)),
        catchError(this.handleError));
  }

  onPostsChanges(): Observable < Array < Post >> {
    return this.postsSubject.asObservable();
  }

  private notifyPostsChanges(): void {
    this.postsSubject.next(this.posts);
  }
}
