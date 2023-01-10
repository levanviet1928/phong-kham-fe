import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/module/home/home.component';
import { DetailComponent } from './layout/module/service/detail/detail.component';
import {RoomComponent} from "./layout/module/room/room.component";
import {ServiceComponent} from "./layout/module/service/service.component";
import {PatientComponent} from "./layout/module/patient/patient.component";

const routes: Routes = [
  { path: '', redirectTo: '/singin', pathMatch: 'full' },
  { path: 'room', component: RoomComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'patient', component: PatientComponent },
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
      {
        path: 'room',
        loadChildren: () =>
          import('./layout/module/room/room.module').then((m) => m.RoomModule),
      },
      {
        path: 'patient',
        loadChildren: () =>
          import('./layout/module/patient/patient.module').then(
            (m) => m.PatientModule
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
