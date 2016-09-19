import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService, WeixinService } from '../service/index';

/**
 * This class represents the lazy loaded UserComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent {
  userid: string;
  user: any = {};
  errorMessage: string;

  constructor(public userService: UserService, public weixinService: WeixinService, public route: ActivatedRoute) {
    this.weixinService.config();
  }
  
  /**
   * Get the merchants OnInit
   */
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

  //提现
  profitOn(profitid: any) {
    if (!profitid) return;
    this.userService.profitOn(profitid)
                    .subscribe(
                        res => {
                          if (!res.error) {
                            alert('提现成功！');
                          } else {
                            alert('提现失败！');
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  //分享
  share() {
    var title = '细节生活';
    var link = '';
    var img = this.user.qrcode;

    this.weixinService.wxshareTimeLine(title, link, img);
  }
}
