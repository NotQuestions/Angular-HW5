import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  comments: Comment[];
  id: number;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.comments = value.commentsResolve;
    });
  }

  getPosts(): void {
    this.router.navigate(['comments', this.id], {state: {id: this.id}});

  }

}
