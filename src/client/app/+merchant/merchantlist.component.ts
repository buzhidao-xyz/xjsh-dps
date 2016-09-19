import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-merchantlist',
  templateUrl: 'merchantlist.component.html',
  styleUrls: ['merchant.component.css'],
})

export class MerchantListComponent implements OnInit {

  newMerchant: string = '';
  errorMessage: string;
  merchantlist: any = [];

  /**
   * Creates an instance of the MerchantComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor(public merchantService: MerchantService, public router: Router) {}

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
                          if (!res.error) {
                            this.merchantlist = res.merchants;
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  merchantPay(merchantid: any): void {
    this.merchantService.merchantid = merchantid;
    this.router.navigate(['/pay']);
  }

  merchantMap(merchantid: any): void {
    this.merchantService.merchantid = merchantid;
    this.router.navigate(['/merchant/map']);
  }
}
