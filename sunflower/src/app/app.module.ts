import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PostsService } from './posts.service';
import { AppRoutingModule } from './app-routing.module';

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

import { LoginComponent } from './pages/login/login.component';
import { AdminService } from './pages/services/admin.service';
import {AuthguardGuard} from './pages/guards/authguard.guard';
import { FormsModule } from '@angular/forms';



const appRoutes: Routes=[
  {
    path :'admin',

      children:[
        {
          path :"index",
          component : IndexComponent
        },
        {
          path :"contact",
          canActivate:[AuthguardGuard],
          component : ContactComponent
        },
        {
          path :"login",
          component : LoginComponent
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
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
    LoginComponent
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminService,AuthguardGuard,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
