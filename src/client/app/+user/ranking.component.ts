import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-ranking',
  templateUrl: 'ranking.component.html',
  styleUrls: ['user.component.css'],
})

export class RankingComponent implements OnInit {
  errorMessage: string;
  ranking: any = [];

  title: string;

  //构造函数
  constructor(public userService: UserService) {}

  //初始化执行
  ngOnInit() {
    this.getRanking();
  }

  /**
   * Handle the UserService observable
   */
  getRanking() {
    this.userService.getRanking()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.title = res.ranking.title;
                            this.ranking = res.ranking.users;
                            for (var index in this.ranking) {
                              this.ranking[index].profit_amount = (this.ranking[index].profit_amount/100).toFixed(2);
                            }
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }
}
