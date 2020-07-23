import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Resolve, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[];
  id: FormControl = new FormControl('', Validators.required);
  form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.form = new FormGroup({
      id: this.id,
    });
    activatedRoute.data.subscribe(value => {
      this.users = value.usersResolve;
    });
  }


  getUser(): void {
    this.router.navigate(['users', this.id.value], {state: {id: this.id.value}});
  }
}
