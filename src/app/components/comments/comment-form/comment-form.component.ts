import { Comment } from './../../../shared/models/comment.model';
import { Component, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  @Input() comment: Comment = new Comment();
  @Output() commentSubmit: EventEmitter<Comment> = new EventEmitter();
  @ViewChild('commentForm') commentForm: FormGroup;

  constructor() { }

  onSubmitCommentForm(): void {
    if (this.commentForm.valid) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA", this.comment);
      this.commentSubmit.emit(this.comment);
    }
  }

  reset(): void {
    this.comment = new Comment();
    this.commentForm.reset();
  }
}
