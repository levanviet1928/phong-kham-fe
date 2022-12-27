import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, protected router: Router, private accountService: AccountService) { }
  typePassword = 'password'
  hiddenIconEye = false;
  hiddenIconEyeInvisible = true;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [null]
    });

  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let userInfo = {
        userName: this.validateForm.value.userName,
        password: this.validateForm.value.password,
      }
      // console.log(userInfo.userName + userInfo.password);

      this.accountService.login(userInfo).subscribe(
        data => {
          localStorage.setItem('userInfo', data),
          this.router.navigate(['home']);
        },
        err => {
          alert("tai khoan hoac mat khau khong chinh xacs")
        }
      );

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

  showPass(isShow: boolean): void {
    if (isShow) {
      this.typePassword = 'text';
      this.hiddenIconEye = true;
      this.hiddenIconEyeInvisible = false;
      return
    }
    this.typePassword = 'password';
    this.hiddenIconEye = false;
    this.hiddenIconEyeInvisible = true;
    return
  }


}
