import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {ConfirmDialogComponent} from "./shared/confirm-dialog/confirm-dialog.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire'
import {AngularFireStorageModule} from '@angular/fire/storage'
import {environment} from '../environments/environment'
import {JwtInterceptor} from "./security/jwt.interceptor";
import {AuthenticationService} from "./security/authentication.service";
import {AuthGuard} from "./security/auth.guard";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./security/authtentication.interceptor";
import { LoginComponent } from './shared/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './shared/register/register.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ConfirmDialogComponent,
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
