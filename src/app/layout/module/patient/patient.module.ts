import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { AntdModule } from 'src/app/shared/antd.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    PatientComponent,
    CreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    AntdModule
  ]
})
export class PatientModule { }
