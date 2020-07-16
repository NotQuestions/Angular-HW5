import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: Post[];
  id: number;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.posts = value.postsResolve;
    });
  }



  getPosts(): void {
    this.router.navigate(['posts', this.id], {state: {id: this.id}});
  }


}
