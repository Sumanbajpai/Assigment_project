import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
    data: { title: 'Login', icon: 'fa-bolt' }
  },
  {
    path: 'party-management',
    loadChildren: () => import('./views/party-management/party-management.module').then((m) => m.PartyManagementModule),
    data: { title: 'Party Management', icon: 'fa-bolt' }
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
