import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserpageComponent } from './userpage/userpage.component';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserdetailComponent } from './userdetail/userdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserpageComponent,
    HomeComponent,
    UserdetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
