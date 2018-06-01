import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';

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
          component : ContactComponent
        },
        {
          path :"login",
          component : LoginComponent
        },
        {
          path :"categories",
          component : CategoriesComponent
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
    LoginComponent,
    CategoriesComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
