import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../models/User';
import {ActivatedRoute, Resolve, Router} from '@angular/router';
import {SingleUserResolveService} from '../../service/user/single-user-resolve.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  user: User;
  posts: Post[];
  id: number;

  constructor(private singleUserResolveService: SingleUserResolveService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.data.subscribe(value => {
      this.user = value.singleUserResolve;
      this.posts = value.postOfUserResolve;
    });
  }


  getCommentsOfPost(): void {
    this.router.navigate(['users', this.user.id, 'comments', this.id], {state: {id: this.id}});

  }
}
