import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Comment} from '../../models/Comment';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements Resolve<Comment[]> {

  constructor(private httpClient: HttpClient) {
  }

  getComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  resolve(): Observable<Comment[]> {
    return this.getComments();
  }
}
