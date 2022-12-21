import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, protected router: Router) { }
  typePassword = 'password'
  hiddenIconEye = false;
  hiddenIconEyeInvisible = true;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  login() {
    localStorage.setItem('isLogin', 'true');
    this.router.navigate(['']);
  }

  showPass(isShow: boolean): void{
    if(isShow){
      this.typePassword='text';
      this.hiddenIconEye=true;
      this.hiddenIconEyeInvisible=false;
      return
    }
    this.typePassword='password';
    this.hiddenIconEye=false;
    this.hiddenIconEyeInvisible=true;
    return
  }

}
