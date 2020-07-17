import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.css']
})
export class CommentsPostComponent  {
  comments: Comment[];
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(value => {
      this.comments = value.commentsPostResolve;
    });
  }



}
