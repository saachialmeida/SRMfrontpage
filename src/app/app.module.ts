import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { CampuslifeComponent } from './pages/campuslife/campuslife.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AdmissionComponent,
    CampuslifeComponent,
    ApplyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
