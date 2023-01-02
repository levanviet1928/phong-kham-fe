import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: ':{id}', component: DetailComponent },
  { path: 'add', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
