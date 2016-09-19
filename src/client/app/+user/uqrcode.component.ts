import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, WeixinService } from '../service/index';

/**
 * This class represents the lazy loaded UserComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-uqrcode',
  templateUrl: 'uqrcode.component.html',
  styleUrls: ['user.component.css'],
  directives: []
})
export class UqrcodeComponent {
  qrcodeurl: string;

  errorMessage: string;

  constructor(public userService: UserService, public weixinService: WeixinService, public router: Router) {
    var url = encodeURIComponent(location.origin+'/user/uqrcode');
    // var url = encodeURIComponent(location.href.split('#')[0]);
    this.weixinService.config(url);

    this.qrcodeurl = this.userService.qrcodeurl;
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
    var img = this.qrcodeurl;

    this.weixinService.wxshareTimeLine(title, link, img);
  }
}
