import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/environments/environment';
import { HttpRoomService } from './http-room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  dataSet: any = [];

  constructor(
    private fb: UntypedFormBuilder,
    protected router: Router,
    private httpRoom: HttpRoomService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.httpRoom.getAll().subscribe((data) => {
      this.dataSet = [...data.data]
    });
  }

  editRoom(id: any) {
    this.router.navigate(["/home/room/" + id])
  }

  addRoom() {
    this.router.navigate(["/home/room/add"])
  }


  deleteRoom(id: any) {
    this.httpRoom.deleteItem(id).subscribe(console.log);
  }
}
