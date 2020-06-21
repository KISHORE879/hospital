import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorinfoComponent } from './doctorinfo/doctorinfo.component';
import { DruginfoComponent } from './druginfo/druginfo.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"doctorinfo",component:DoctorinfoComponent},
{path:"druginfo",component:DruginfoComponent},
{path:"registration",component:RegiFormComponent},
{path:"contact",component:ContactComponent},
{path:"about",component:AboutComponent},
{path:"login",component:LoginComponent,
children:[
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent}
]



}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
