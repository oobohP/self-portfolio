import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { APPROUTES } from './app-routing.module';


//Angular Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment'; // API Keys - !! Best practices use enviromental variables in lieu of key characters !!



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PublicModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(APPROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
