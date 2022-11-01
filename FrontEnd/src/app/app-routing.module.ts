import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';




const routes: Routes = [
{ path: 'index', component: IndexComponent,}, 
{ path: 'login', component: LoginComponent},
{ path: 'registro', component: RegistroComponent},
{ path: 'dashboard', component: DashboardComponent},
{ path: '', redirectTo: '/index', pathMatch:'full'},
{ path: '**', component:ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

