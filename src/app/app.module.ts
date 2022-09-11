import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdaptByScreensizeComponent } from './breakpoint-sample/adapt-by-screensize/adapt-by-screensize.component';

@NgModule({
  declarations: [
    AppComponent,
    AdaptByScreensizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
