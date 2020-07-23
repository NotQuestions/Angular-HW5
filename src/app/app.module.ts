import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import {UserService} from './service/user/user.service';
import {PostService} from './service/post/post.service';
import {CommentService} from './service/comment/comment.service';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SingleUserComponent } from './components/single-user/single-user.component';
import {SingleUserResolveService} from './service/user/single-user-resolve.service';
import {SinglePostResolveService} from './service/post/single-post-resolve.service';
import { SinglePostComponent } from './components/single-post/single-post.component';
import {SingleCommentResolveService} from './service/comment/single-comment-resolve.service';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    SingleUserComponent,
    SinglePostComponent,
    SingleCommentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'users',
          component: UserComponent,
          resolve: {usersResolve: UserService},
          children: [
            {path: ':id', component: SingleUserComponent, resolve: {singleUserResolve: SingleUserResolveService}}
          ]
        },
        {
          path: 'posts',
          component: PostComponent,
          resolve: {postsResolve: PostService},
          children: [
            {path: ':id', component: SinglePostComponent, resolve: {singlePostResolve: SinglePostResolveService}}
          ]
        },
        {
          path: 'comments',
          component: CommentComponent,
          resolve: {commentsResolve: CommentService},
          children: [
            {path: ':id', component: SingleCommentComponent, resolve: {singleCommentResolve: SingleCommentResolveService}}
          ]
        },
      ]),
    ReactiveFormsModule,
  ],
  providers: [UserService, PostService, CommentService, SingleUserResolveService, SinglePostResolveService, SingleCommentResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
