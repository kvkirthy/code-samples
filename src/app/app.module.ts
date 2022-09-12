import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdaptByScreensizeComponent } from './breakpoint-sample/adapt-by-screensize/adapt-by-screensize.component';

@NgModule({
  declarations: [
    AppComponent,
    AdaptByScreensizeComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
