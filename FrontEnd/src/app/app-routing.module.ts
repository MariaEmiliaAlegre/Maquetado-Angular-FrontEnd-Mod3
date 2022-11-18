import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { LoginComponent } from "./components/login/login.component";
import { EditeducacionComponent } from "./components/educacion/editeducacion.component";
import { NeweducacionComponent } from "./components/educacion/neweducacion.component";
import { ErrorComponent } from "./components/error/error.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { EditSkillComponent } from "./components/hys/edit-skill.component";
import { NewSkillComponent } from "./components/hys/new-skill.component";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de.component";







const routes: Routes = [
{ path: '', component: IndexComponent,},
{ path: 'login', component: LoginComponent },
{ path: 'nuevaexp', component: NewExperienciaComponent },
{ path: 'editexp/:id', component: EditExperienciaComponent},
{ path: 'nuevaedu', component: NeweducacionComponent},
{ path: 'editedu/:id', component: EditeducacionComponent},
{ path: 'newskill', component: NewSkillComponent},
{ path: 'editskill/:id', component: EditSkillComponent},
{ path: 'editacercade/:id', component: EditAcercaDeComponent},
{ path: '**', component:ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

