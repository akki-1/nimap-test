import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployerComponent } from './employer/employer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"Profile",component:ProfilePageComponent},
  {path:"About-Us",component:AboutUsComponent},
  {path:"Clients",component:ClientsComponent},
  {path:"Employer",component:EmployerComponent},
  {path:"Contact-Us",component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
