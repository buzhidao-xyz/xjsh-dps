import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { MerchantService } from '../service/index';

/**
 * This class represents the lazy loaded MerchantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-payment',
  templateUrl: 'Payment.component.html',
  styleUrls: ['pay.component.css'],
})

export class PaymentComponent implements OnInit {
    amount: any;

    merchantid: string;
    errorMessage: string;
    merchant: any = {};

    constructor(public merchantService: MerchantService, public router: Router) {
        this.merchantid = this.merchantService.merchantid;
        if (!this.merchantid) this.router.navigate(['/']);
        
        this.amount = this.merchantService.amount;
    }

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