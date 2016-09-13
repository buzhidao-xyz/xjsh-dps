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

  /**
   * Creates an instance of the MerchantComponent with the injected
   * UserService.
   *
   * @param {UserService} UserService - The injected UserService.
   */
  constructor(public userService: UserService) {}

  /**
   * Get the merchants OnInit
   */
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
                            this.ranking = res.users;
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }
}
