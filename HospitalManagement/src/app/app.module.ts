import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
import { DruginfoComponent } from './druginfo/druginfo.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CdkDragComponent } from './cdk-drag/cdk-drag.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DoctorinfoComponent,
    DruginfoComponent,
    RegiFormComponent,
    UserComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CdkDragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
