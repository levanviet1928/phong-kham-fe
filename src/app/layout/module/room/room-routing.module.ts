import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { RoomComponent } from './room.component';

const routes: Routes = [
  { path: '', component: RoomComponent },
  { path: ':id', component: DetailComponent },
  { path: 'add', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
