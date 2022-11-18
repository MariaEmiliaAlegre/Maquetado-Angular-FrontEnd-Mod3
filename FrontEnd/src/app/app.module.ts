import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { interceptorProvider } from './components/service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { HysComponent } from './components/hys/hys.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    EducacionComponent,
    ProyectosComponent,
    FooterComponent,
    ExperienciaComponent,
    LoginComponent,
    ErrorComponent,
    IndexComponent,
    LogoAPComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    HysComponent,
    AcercaDeComponent,
    EditAcercaDeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
    }),

   
  ],
  
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
