import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { NavverticalComponent } from './components/dashboard/navvertical/navvertical.component';
import { ModalredesComponent } from './components/dashboard/modalredes/modalredes.component';
import { ModalacecadeComponent } from './components/dashboard/modalacecade/modalacecade.component';
import { ModalexperienciaComponent } from './components/dashboard/modalexperiencia/modalexperiencia.component';
import { ModaleducacionComponent } from './components/dashboard/modaleducacion/modaleducacion.component';
import { ModalskillsComponent } from './components/dashboard/modalskills/modalskills.component';
import { ModalproyectosComponent } from './components/dashboard/modalproyectos/modalproyectos.component';
import { ModalbannerComponent } from './components/dashboard/modalbanner/modalbanner.component';
import { ModalfooterComponent } from './components/dashboard/modalfooter/modalfooter.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RegistroComponent } from './components/registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    AcercadeComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent,
    LogoutComponent,
    LoginComponent,
    ErrorComponent,
    IndexComponent,
    NavbarComponent,
    NavverticalComponent,
    ModalredesComponent,
    ModalacecadeComponent,
    ModalexperienciaComponent,
    ModaleducacionComponent,
    ModalskillsComponent,
    ModalproyectosComponent,
    ModalbannerComponent,
    ModalfooterComponent,
    DashboardComponent,
    RegistroComponent,
   
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
