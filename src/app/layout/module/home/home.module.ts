import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {FormsModule} from "@angular/forms";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzMenuModule,
    FormsModule,
    NzDividerModule,
    NzSwitchModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class HomeModule { }
