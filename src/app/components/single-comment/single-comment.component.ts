import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {SingleUserResolveService} from '../../service/user/single-user-resolve.service';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent  {

  comment: Comment;
  constructor(private singleUserResolveService: SingleUserResolveService, private activatedRoute: ActivatedRoute ) {

    activatedRoute.data.subscribe(value => {
      this.comment = value.singleCommentResolve;
    });
  }


}
