import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './admin/pages/header/header.component';
import { FooterComponent } from './admin/pages/footer/footer.component';
import { IndexComponent } from './admin/pages/index/index.component';
import { ContactComponent } from './admin/pages/contact/contact.component';

const appRoutes: Routes=[
  
  {
    path :'admin',
    // component: IndexComponent,
      children:[
        {
          path :"contact",
          component : ContactComponent
        },
        {
          path :"index",
          component : IndexComponent
      }
      ]
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
