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
  errorMessage: string;
  user: any = {};

  constructor(public userService: UserService, public weixinService: WeixinService, public route: ActivatedRoute) {
    // this.weixinService.config();
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
}
