import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  users: User[];
  id: number;
  constructor( private activatedRoute: ActivatedRoute, private router: Router) {
  activatedRoute.data.subscribe(value => {
    this.users = value.usersResolve;
  });
  }


  getUser(): void {
    this.router.navigate(['users', this.id], {state: {id: this.id}});
  }
}
