import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { GlobalErrorHandlerService } from './shared/handlers/global-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { SectoresComponent } from './components/sectores/sectores.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';
import { UserFinderComponent } from './components/users/user-finder/user-finder.component';
import { UserFilterPipe } from './shared/pipes/user-filter.pipe';
import { IntroPipe } from './shared/pipes/intro.pipe';
import { RegisterCompaniesComponent } from './components/misc/register-companies/register-companies.component';
import { CompaniesFinderComponent } from './components/companies/companies-finder/companies-finder.component';
import { CompaniesItemComponent } from './components/companies/companies-item/companies-item.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresasComponent,
    SectoresComponent,
    PerfilComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserItemComponent,
    UserFinderComponent, 
    UserFilterPipe,
    IntroPipe,
    RegisterCompaniesComponent,
    CompaniesFinderComponent,
    CompaniesItemComponent,
    CompaniesListComponent,
    PostCreateComponent,
    PostDetailsComponent,
    PostFormComponent,
    PostItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
