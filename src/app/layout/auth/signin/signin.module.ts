import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { AntdModule } from 'src/app/shared/antd.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    AntdModule,
    ReactiveFormsModule,
    SinginRoutingModule
  ]
})
export class SigninModule { }
