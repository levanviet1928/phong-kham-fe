import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('serviceName') nameElement: any;
  @ViewChild('serviceCode') codeElement: any;
  @ViewChild('servicePrice') price: any;



  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private route: ActivatedRoute, protected router: Router, private httpService: HttpServiceService) { }
  itemId: any = null;
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      code: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });

    this.itemId = this.route.snapshot.params['id'] as string;


    this.httpService.getItemById(this.itemId).subscribe((item) => {
      let data = item.data;
      this.validateForm.setValue({
        code: data.serviceCode,
        name: data.serviceName,
        price: data.price
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
  saveService(): void {
    let service = null;
    if (this.itemId == 'add') {
      service = {
        serviceCode: this.validateForm.get('code')?.value,
        serviceName: this.validateForm.get('name')?.value,
        price: this.validateForm.get('price')?.value,
      }
    } else {
      service = {
        serviceId: this.itemId,
        serviceCode: this.validateForm.get('code')?.value,
        serviceName: this.validateForm.get('name')?.value,
        price: this.validateForm.get('price')?.value,
      }
    }

    console.log(service);

    this.httpService.saveItem(service).subscribe(res => {
      this.router.navigate(["/home/service"])
    });

    
  }

  cancel() {
    this.router.navigate(["/home/service"]);
  }
}
