import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { DetailComponent } from './detail/detail.component';
import { AntdModule } from 'src/app/shared/antd.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    AntdModule
  ]
})
export class ServiceModule { }
