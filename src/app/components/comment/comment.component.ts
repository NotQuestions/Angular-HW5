import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from '../../models/Comment';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  comments: Comment[];
  id: FormControl = new FormControl('', Validators.required);
  form: FormGroup;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      id: this.id,
    });
    activatedRoute.data.subscribe(value => {
      this.comments = value.commentsResolve;
    });
  }

  getComment(): void {
    this.router.navigate(['comments', this.id.value], {state: {id: this.id.value}});

  }

}
