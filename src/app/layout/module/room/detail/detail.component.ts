import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpRoomService } from '../http-room.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('roomName') nameElement: any;
  @ViewChild('roomCode') codeElement: any;


  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private route: ActivatedRoute, protected router: Router, private httpRoomService: HttpRoomService) { }
  itemId: any = null;
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });

    this.itemId = this.route.snapshot.params['id'] as string;


    this.httpRoomService.getItemById(this.itemId).subscribe((item) => {
      let data = item.data;
      this.validateForm.setValue({
        code: data.roomCode,
        name: data.roomName
      });
    });


  }

  submitForm(): void {
    if (!this.validateForm.valid) {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  saveRoom(): void {
    let room = null;
    if (this.itemId == 'add') {
      room = {
        roomCode: this.validateForm.get('code')?.value,
        roomName: this.validateForm.get('name')?.value,
      }
    } else {
      room = {
        roomId: this.itemId,
        roomCode: this.validateForm.get('code')?.value,
        roomName: this.validateForm.get('name')?.value,
      }
    }

    console.log(room);

    this.httpRoomService.saveItem(room).subscribe(res => {
      this.router.navigate(["/home/room"])
    });


  }

  cancel() {
    this.router.navigate(["/home/room"]);
  }
}
