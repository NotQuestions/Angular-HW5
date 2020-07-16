import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<User[]>{

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }



  resolve(): Observable<User[]>{
    return this.getUsers();
  }
}
