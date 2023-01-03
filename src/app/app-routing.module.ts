import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/module/home/home.component';
import { DetailComponent } from './layout/module/service/detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/singin', pathMatch: 'full' },
  {
    path: 'singin',
    loadChildren: () =>
      import('./layout/auth/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'service',
        loadChildren: () =>
          import('./layout/module/service/service.module').then(
            (m) => m.ServiceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
