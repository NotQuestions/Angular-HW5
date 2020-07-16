import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class SinglePostResolveService implements Resolve<Post> {

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    return this.getPost(route.params.id);

  }


  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
