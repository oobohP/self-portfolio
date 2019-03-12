import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {PublicModule} from './public/public.module';
import { RouterModule} from '@angular/router';
import {APPROUTES} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PublicModule,
    RouterModule.forRoot(APPROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
