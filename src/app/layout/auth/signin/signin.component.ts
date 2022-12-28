import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AccountService } from './account.service';

@Component({
  selector: 'app-singin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, protected router: Router, private accountService: AccountService,
    private notification: NzNotificationService) { }
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

      this.accountService.login(userInfo).subscribe(
        data => {

          localStorage.setItem('access_token',  data['access_token']);
          localStorage.setItem('token_type',  data['token_type']);
          localStorage.setItem('user_id',  data.account.account_id);
          localStorage.setItem('user_name',  data.account.user_name);
          console.log(data);

          this.router.navigate(['home']);
        },
        err => {
            this.notification.blank("Thông báo",
            'Tài khoản hoặc mật khẩu không chính xác',
            {nzPlacement : 'top'}
            );
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
