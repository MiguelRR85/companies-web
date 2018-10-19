import { CommentFormComponent } from './../comment-form/comment-form.component';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from './../../../shared/models/comment.model';
import { CommentService } from '../../../shared/services/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @ViewChild(CommentFormComponent) commentFormComponent: CommentFormComponent;
  postId: string;
  companyId: string;

  constructor(
    private routes: ActivatedRoute,
    private commentService: CommentService) { }

  ngOnInit() {
    this.routes.params.subscribe(params => this.postId = params.postId);
    this.routes.params.subscribe(params => this.companyId = params.companyId);
  }
  
  onSubmitCreateCommentSubmit(comment: Comment): void {
    console.log("PICHAFLOJA ==>>>",comment);
    console.log("PICHAFLOJA ==>>>",this.companyId);
    console.log("PICHAFLOJA ==>>>",this.postId);
    this.commentService.create(this.postId, comment)
      .subscribe((comment: Comment) => {
        this.commentFormComponent.reset();
       });
  }     
}
