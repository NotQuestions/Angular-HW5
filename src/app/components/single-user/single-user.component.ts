import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Resolve} from '@angular/router';
import {SingleUserResolveService} from '../../service/user/single-user-resolve.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent  {
  user: User;
  constructor(private singleUserResolveService: SingleUserResolveService, private activatedRoute: ActivatedRoute ) {

       activatedRoute.data.subscribe(value => {
          this.user = value.singleUserResolve;
        });
  }





}
