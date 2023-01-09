import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  dataSet: any = [];
  constructor(protected router: Router,) { }

  ngOnInit(): void {
  }

  addCreatePatient() {
    this.router.navigate(["/home/patient/add"])
  }

  detailPatient(){
    this.router.navigate(["/home/patient/1"])
  }
}
