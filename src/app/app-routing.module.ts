import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { CampuslifeComponent } from './pages/campuslife/campuslife.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'campuslife',component:CampuslifeComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'contact',component:ContactComponent},
  {path:'apply',component:ApplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
