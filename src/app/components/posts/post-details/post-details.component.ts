import { Post } from './../../../shared/models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../../shared/services/post.service'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post = new Post();
  // postId: string;
  // companyId: string;
  prueba: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      const postId = params.postId;
      
      const companyId = params.companyId;
      this.postService.get(postId, companyId)
      .subscribe((post: Post) => {
        this.post = post
        console.log("==============>",post)
      })
     });
    // this.postId = this.route.snapshot.paramMap.get('postId');
    // this.companyId = this.route.snapshot.paramMap.get('companyId');
    // console.log("=>",this.postService.get(this.postId, this.companyId));
    // this.postService.get(this.postId, this.companyId)
    
    
  }


}
