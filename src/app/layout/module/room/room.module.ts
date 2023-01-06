import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
