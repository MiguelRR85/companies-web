import { Post } from './../../../shared/models/post.model';
import { Component, Output, Input, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {

  @Input() post: Post = new Post();
  @Output() postSubmit: EventEmitter<Post> = new EventEmitter();
  @ViewChild('postForm') postForm: FormGroup;

  constructor() {}

  onSubmitPostForm(): void {
    if (this.postForm.valid) {
      console.log("BBBBBBBBBBBBBBBBBBBBBBB", this.post);
      this.postSubmit.emit(this.post);
    }
  }

  reset(): void {
    this.post = new Post();
    this.postForm.reset();
  }
}

