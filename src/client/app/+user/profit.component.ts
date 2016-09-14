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
    this.getProfits();
  }

  /**
   * Handle the UserService observable
   */
  getProfits() {
    this.userService.getProfit()
                     .subscribe(
                        res => {
                          if (!res.error) {
                            this.profits = res.profits;
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }
}
