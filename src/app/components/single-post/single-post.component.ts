import { Component } from '@angular/core';
import {SingleUserResolveService} from '../../service/user/single-user-resolve.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent  {

  post: Post;
  constructor(private singleUserResolveService: SingleUserResolveService, private activatedRoute: ActivatedRoute ) {

    activatedRoute.data.subscribe(value => {
      this.post = value.singlePostResolve;
    });
  }

}
