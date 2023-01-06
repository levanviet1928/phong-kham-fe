import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { DetailComponent } from './detail/detail.component';
import { AntdModule } from 'src/app/shared/antd.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    AntdModule
  ]
})
export class RoomModule { }
