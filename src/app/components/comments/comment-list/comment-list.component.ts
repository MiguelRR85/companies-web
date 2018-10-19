import { CommentCreateComponent } from './../comment-create/comment-create.component';
import { CommentService } from './../../../shared/services/comment.service';
import { Comment } from './../../../shared/models/comment.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Array<Comment> = [];
  onCommentChangesSubscription: Subscription;
  @ViewChild(CommentCreateComponent) commentCreateComponent: CommentCreateComponent;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map(params => params.postId),
      switchMap(postId => this.commentService.list(postId))
    ).subscribe((comments: Array<Comment>) => this.comments = comments);

    this.onCommentChangesSubscription = this.commentService.onCommentsChanges()
      .subscribe((comments: Array<Comment>) => this.comments = comments);
  }

  ngOnDestroy() {
    this.onCommentChangesSubscription.unsubscribe();
  }
}
