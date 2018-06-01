import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';

import { RouterModule, Routes } from '@angular/router';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
