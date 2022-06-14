import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployerComponent } from './employer/employer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ProfilePageComponent,
    AboutUsComponent,
    ClientsComponent,
    EmployerComponent,
    ContactUsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SweetAlert2Module,
    NgxSliderModule,
    FontAwesomeModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({
      showForeground:true
    }),
    
  ],
  providers: [NgbCarousel,HomepageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
