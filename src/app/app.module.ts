import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileService } from './profile-service/profile.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
