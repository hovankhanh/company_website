import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

import { PostsComponent } from './pages/posts/posts.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostAddComponent } from './pages/posts/post-add/post-add.component';
import { PostEditComponent } from './pages/posts/post-edit/post-edit.component';

const appRoutes:Routes= [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'admin', component: IndexComponent },
  {
    path :'admin',
      children:[
        { path: '', component: IndexComponent },
        { path: 'contact', component: ContactComponent },
        {
          path : 'posts',
            children:[
              {
                path: 'post-list',
                component: PostListComponent
              },
              {
                path: 'post-add',
                component: PostAddComponent
              },
              {
                path: 'edit/:id',
                component: PostEditComponent
              }
            ]
        }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
