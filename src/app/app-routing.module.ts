import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserModule} from "./layouts/user/user.module";
import {AdminModule} from "./layouts/admin/admin.module";
import {LoginComponent} from "./shared/login/login.component";
import {RegisterComponent} from "./shared/register/register.component";
import {AuthGuard} from "./security/auth.guard";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', loadChildren: () => UserModule},
  {path: 'admin', loadChildren: () => AdminModule},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
