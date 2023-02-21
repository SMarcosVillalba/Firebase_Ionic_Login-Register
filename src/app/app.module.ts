import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos modulos necesarios
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth'
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyA-CKhAGU0-uimakhz5xU5khXOPqqfGKr4",
  authDomain: "angularfirebase-bae78.firebaseapp.com",
  projectId: "angularfirebase-bae78",
  storageBucket: "angularfirebase-bae78.appspot.com",
  messagingSenderId: "927054941959",
  appId: "1:927054941959:web:bed28828d9deba60c7bfa2"
  }
  
  const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule,AngularFireAuthModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


