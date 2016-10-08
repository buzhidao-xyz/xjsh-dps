import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Config, NavbarComponent, ToolbarComponent } from './commonc/index';
import { UserService, WeixinService } from './service/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  styleUrls: ['app.component.css']
})

export class AppComponent {
  user: any = {
    "qrcode": ""
  };
  errorMessage: any;

  constructor(public router: Router, public aroute: ActivatedRoute, public userService: UserService, public weixinService: WeixinService) {
    // console.log('Environment config', Config);

    //检查用户授权
    this.checkUserAuth();
  }

  //检查用户授权
  checkUserAuth() {
    this.userService.getUserinfo()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.user = res.user;
                          } else {
                            var url = location.href.split('#')[0];
                            if (url.indexOf('?')<0) {
                              url = 'http://'+location.host+'/?action='+location.pathname.substr(1, 9999);
                            }
                            this.userService.auth(url);
                            return;
                          }

                          //路由跳转
                          this.routeNavigate();
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  //路由跳转
  routeNavigate() {
    this.aroute.queryParams.subscribe(
      params => {
        var action: string = "";
        if ("action" in params) {
          action = params['action'];

          switch (action) {
            case 'user':
              this.router.navigate(['/user']);
            break;
            case 'user/ranking':
              this.router.navigate(['/user/ranking']);
            break;
            case 'user/profit':
              this.router.navigate(['/user/profit']);
            break;
            case 'userqrcode':
              this.router.navigate(['/userqrcode']);
            break;
            default:
            break;
          }
        }

        //注册wexinJS
        var url: string = "";
        if (action.length) {
          url = 'http://'+location.host+'/'+action;
        } else {
          url = location.href.split('#')[0];
        }
        if (url.indexOf('?')<0) {
          this.weixinService.config(encodeURIComponent(url));

          //分享设置
          this.share();
        }
      }
    );
  }

  //分享
  share() {
    var title = '细节生活';
    var desc = '';
    var link = this.user.qrcode;
    var img = 'http://'+location.host+'/assets/images/qrcode-xjsh.jpg';

    this.weixinService.wxshareTimeLine(title, link, img);
    this.weixinService.wxshareAppMessage(title, desc, link, img);
    this.weixinService.wxshareQQ(title, desc, link, img);
    this.weixinService.wxshareQZone(title, desc, link, img);
  }
}
