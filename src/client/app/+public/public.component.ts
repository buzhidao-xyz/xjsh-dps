import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

/**
 * This class represents the lazy loaded PublicComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-public',
  templateUrl: 'public.component.html',
  styleUrls: ['public.component.css'],
})

export class PublicComponent implements OnInit {
  errorMessage: string;
  merchant: any = {};

  /**
   * Creates an instance of the PublicComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor() {}
  
  /**
   * Get the merchants OnInit
   */
  ngOnInit() {
    
  }
}