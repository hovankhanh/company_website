import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { UiService } from './ui/ui.service';




@NgModule({
  declarations: [
    AppComponent,
    UiComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
  	UiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
