import { CommentService } from './../../../shared/services/comment.service';
import { Comment } from './../../../shared/models/comment.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SessionService } from './../../../shared/services/session.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment = new Comment();

  constructor() { }

  ngOnInit() {
  }

}
