import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Comment} from '../../models/Comment';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements Resolve<Comment[]> {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
  getCommentsOfPost(id): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<Comment[]> | Comment[] {
    console.log(state);
    console.log(route.params.id);
    if ((state.toString().indexOf('users')) > 0) {
      return this.getCommentsOfPost(route.params.id);
    } else {
      return this.getComments();
    }
  }


}
