import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  merchantid: any;
  merchant: any = {};
  errorMessage: string;

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

  }
}