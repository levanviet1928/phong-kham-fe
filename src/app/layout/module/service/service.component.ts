import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  dataSet: any = [];

  constructor(
    private fb: UntypedFormBuilder,
    protected router: Router,
    private httpService: HttpServiceService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.httpService.getAll().subscribe((data) => {
      this.dataSet = [...data.data]
    });
  }

  editService(id: any) {
    this.router.navigate(["/home/service/" + id])
  }

  addService() {
    this.router.navigate(["/home/service/add"])
  }


  deleteService(id: any) {
    this.httpService.deleteItem(id).subscribe(console.log);
  }
}
