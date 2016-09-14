import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MerchantService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantMapComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-merchantmap',
  templateUrl: 'merchantmap.component.html',
  styleUrls: ['merchant.component.css'],
})

export class MerchantMapComponent implements OnInit {
    merchantid: string;
    errorMessage: string;
    merchant: any = {};

    //BDMapObject
    BDMapObject: any;

  /**
   * Creates an instance of the MerchantComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor(public merchantService: MerchantService, public route: ActivatedRoute) {}
  
  /**
   * Get the merchants OnInit
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        this.merchantid = params['merchantid'];

        this.getMerchantlist();
    });
  }

  /**
   * Handle the MerchantService observable
   */
  getMerchantlist() {
    this.merchantService.getMerchantlist()
                     .subscribe(
                        res => {
                            if (!res.error) {
                                for (let index in res.merchants) {
                                    if (res.merchants[index].id == this.merchantid) this.merchant = res.merchants[index];
                                }
                            }
                        },
                        error => {
                            this.errorMessage = <any>error;
                        }
                     );
  }
}