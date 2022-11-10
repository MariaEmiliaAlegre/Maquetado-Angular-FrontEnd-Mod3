import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';




const routes: Routes = [
{ path: '', component: IndexComponent,},
{ path: 'login', component: LoginComponent},
{ path: '**', component:ErrorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

