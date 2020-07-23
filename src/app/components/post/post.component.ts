import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: Post[];
  id: FormControl = new FormControl('', Validators.required);
  form: FormGroup;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.posts = value.postsResolve;
    });
    this.form = new FormGroup({
      id: this.id,
    });
  }



  getPosts(): void {
    this.router.navigate(['posts', this.id.value], {state: {id: this.id.value}});

  }
}
