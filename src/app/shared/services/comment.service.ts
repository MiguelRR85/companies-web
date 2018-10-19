import { Comment } from '../models/comment.model';
import { ApiError } from '../models/api-error.model';
import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseApiService {
  private static readonly COMMENT_API = `${BaseApiService.BASE_API}/comments`;
  //private static readonly COMPANY_API = `${BaseApiService.BASE_API}/companies`;

  private comments: Array <Comment> = [];
  private commentsSubject: Subject <Array<Comment>> = new Subject();

  constructor(private http: HttpClient) {
    super();
   }

  
  list(postId: string): Observable <Array<Comment> | ApiError > {
    return this.http.get<Array<Comment>>(`${CommentService.COMMENT_API}/post/${postId}`,  BaseApiService.defaultOptions)
      .pipe(
        map((comments: Array<Comment>) => {
          comments = comments.map(comment => Object.assign(new Comment(), comment));
          this.comments = comments;
          this.notifyCommentChanges();
          return comments;
        }),
        catchError(this.handleError)
      );
  }

  create( postId: string, comment: Comment): Observable<Comment | ApiError> {
    console.log("PICHAFLOJA===>", comment)
      return this.http.post<Comment>(`${CommentService.COMMENT_API}/post/${postId}`, comment, BaseApiService.defaultOptions)
      .pipe(
        map((comment: Comment) => {
          comment = Object.assign(new Comment(), comment);
          this.comments.push(comment);
          this.notifyCommentChanges();
          return comment;
        }),
        catchError(this.handleError));

   }
   onCommentsChanges(): Observable < Array < Comment >> {
    return this.commentsSubject.asObservable();
  }
   private notifyCommentChanges(): void {
    this.commentsSubject.next(this.comments);
  }
}
