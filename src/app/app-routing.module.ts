import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserModule} from "./layouts/user/user.module";
import {AdminModule} from "./layouts/admin/admin.module";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/admin'},
  {path: 'home', loadChildren: () => UserModule},
  {path: 'admin', loadChildren: () => AdminModule},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
