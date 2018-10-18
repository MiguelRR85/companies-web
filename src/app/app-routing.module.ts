import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { SectoresComponent } from './components/sectores/sectores.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterCompaniesComponent } from './components/misc/register-companies/register-companies.component'
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';




const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'users', component:UserListComponent},
{ path: 'home', component:CompaniesListComponent},
{ path: 'empresas', component:EmpresasComponent},
{ path: 'sectores', component:SectoresComponent},
{ path: 'perfil', component:PerfilComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'companies/:companyId', component: PostListComponent },
{ path: 'companies/:companyId/post/:postId', component: PostDetailsComponent },
{ path: 'companyRegister', component: RegisterCompaniesComponent },
{ path: 'posts', component: PostFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
