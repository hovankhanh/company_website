import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
