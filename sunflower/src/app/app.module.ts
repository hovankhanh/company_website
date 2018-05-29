import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { PostAddComponent } from './pages/posts/post-add/post-add.component';
import { PostEditComponent } from './pages/posts/post-edit/post-edit.component';

const appRoutes: Routes=[
  {
    path :'',
    component: IndexComponent
  },
  {
    path :'admin',
      children:[
        {
          path :"",
          component : IndexComponent
        },
        {
          path :"contact",
          component : ContactComponent
        }
      ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    ContactComponent,
    PostsComponent,
    PostListComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
