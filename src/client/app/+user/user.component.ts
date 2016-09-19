import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, WeixinService } from '../service/index';

/**
 * This class represents the lazy loaded UserComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: []
})
export class UserComponent implements OnInit {
  user: any = {};

  errorMessage: string;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserinfo()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.user = res.user;
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  //提成
  profit() {
    this.router.navigate(['/user/profit']);
  }

  //二维码
  qrcode() {
    this.userService.qrcodeurl = this.user.qrcode;
    this.router.navigate(['/user/qrcode']);
  }
}
