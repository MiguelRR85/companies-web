import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './../../../shared/services/session.service';
import { Post } from './../../../shared/models/post.model';
import { User } from './../../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../shared/services/post.service';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post = new Post();
  authUser: User = new User();
  onAuthUserChanges: Subscription;
  companyId: string;

  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private sessionService: SessionService,
    private postService: PostService
    ) { }

  ngOnInit() {  
    this.routes.params.subscribe(params => this.companyId = params.id);
    this.authUser = this.sessionService.user;
    this.onAuthUserChanges = this.sessionService.onUserChanges()
      .subscribe((user: User) => this.authUser = user);
  }

  ngOnDestroy() {
    this.onAuthUserChanges.unsubscribe();
  }

  // onClickPost() {
  //   this.router.navigate(['/companies', "aaa", this.post._id ]);
  // }

}
