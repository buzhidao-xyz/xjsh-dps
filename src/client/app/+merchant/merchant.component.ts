import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { MerchantService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-merchant',
  templateUrl: 'merchant.component.html',
  styleUrls: ['merchant.component.css'],
})

export class MerchantComponent implements OnInit {
  errorMessage: string;
  merchant: any = {};

  /**
   * Creates an instance of the MerchantComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor(public merchantService: MerchantService) {}
  
  /**
   * Get the merchants OnInit
   */
  ngOnInit() {
    this.getMerchantlist();
  }

  /**
   * Handle the MerchantService observable
   */
  getMerchantlist() {
    this.merchantService.getMerchantlist()
                     .subscribe(
                        res => {
                          let merchantid = "1";

                          if (!res.error) {
                            for (let index in res.merchants) {
                              if (res.merchants[index].id == merchantid) this.merchant = res.merchants[index];
                            }
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

}