import { Component, OnInit } from '@angular/core';
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
                          if (!res.error) {
                            this.merchantlist = res.merchants;
                          }
                        },
                        error => {
                          this.errorMessage = <any>error;
                        }
                     );
  }

  /**
   * Pushes a new merchant onto the merchants array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addMerchant(): boolean {
    this.merchantlist.push(this.newMerchant);
    this.newMerchant = '';
    return false;
  }

}
