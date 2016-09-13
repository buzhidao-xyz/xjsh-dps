import { Component, OnInit } from '@angular/core';
import { MerchantListComponent } from '../+merchant/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  directives: [MerchantListComponent],
  styleUrls: ['home.component.css'],
})

export class HomeComponent {

}
