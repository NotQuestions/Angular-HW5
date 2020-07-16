import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../../models/User';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleUserResolveService implements Resolve<User>{

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.getUser(route.params.id);

  }



  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
