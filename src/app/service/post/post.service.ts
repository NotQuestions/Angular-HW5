import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Post} from '../../models/Post';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<Post[]>{

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  resolve(): Observable<Post[]> {
    return this.getPosts();
  }
}
