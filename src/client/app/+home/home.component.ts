import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newMerchant: string = '';
  errorMessage: string;
  merchants: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * MerchantService.
   *
   * @param {MerchantService} MerchantService - The injected MerchantService.
   */
  constructor(public merchantService: MerchantService) {}

  /**
   * Get the merchants OnInit
   */
  ngOnInit() {
    this.getMerchants();
  }

  /**
   * Handle the MerchantService observable
   */
  getMerchants() {
    this.merchantService.getMerchantlist()
                     .subscribe(
                       merchants => this.merchants = merchants,
                       error =>  this.errorMessage = <any>error
                     );
  }

  /**
   * Pushes a new merchant onto the merchants array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addMerchant(): boolean {
    // TODO: implement merchantService.post
    this.merchants.push(this.newMerchant);
    this.newMerchant = '';
    return false;
  }

}
