import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-profit',
  templateUrl: 'profit.component.html',
  styleUrls: ['user.component.css'],
})

export class ProfitComponent implements OnInit {
  errorMessage: string;
  profits: any = [];
  cprofit: any;
  profitscount: any = 0;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getProfits();
    this.getCProfit();
  }

  getCProfit() {
    this.userService.getCProfit()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.cprofit = (res.profit.amount/100).toFixed(2);
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  getProfits() {
    this.userService.getProfit()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.profits = res.profits;
                            for (var index in this.profits) {
                              this.profitscount++;
                              this.profits[index].amount = (this.profits[index].amount/100).toFixed(2);
                            }
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

    //提现中
    for (var index in this.profits) {
      if (this.profits[index].id==profitid) this.profits[index].status = 1;
    }

    this.userService.profitOn(profitid)
                    .subscribe(
                        res => {
                          if (!res.error) {
                            for (var index in this.profits) {
                              if (this.profits[index].id==res.id) this.profits[index].status = 2;
                            }
                            alert('提现成功！');
                          } else {
                            alert(res.message);
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }
}
