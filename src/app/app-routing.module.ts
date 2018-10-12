import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { SectoresComponent } from './components/sectores/sectores.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';
import { UserFinderComponent } from './components/users/user-finder/user-finder.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { LoginComponent } from './components/misc/login/login.component';

const routes: Routes = [
{path:'users', component:UserListComponent},
{path:'home', component:HomeComponent},
{path:'empresas', component:EmpresasComponent},
{path:'sectores', component:SectoresComponent},
{path:'perfil', component:PerfilComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
