import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/singin',  pathMatch: 'full' },
  { path: 'singin', loadChildren: () => import('./layout/auth/signin/signin.module').then(m => m.SigninModule) },
  { path: 'home', loadChildren: () => import('./layout/module/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
