import { Route } from '@angular/router';
import { MerchantComponent } from './index';
import { MerchantMapComponent } from './index';

export const MerchantRoutes: Route[] = [
  {
    path: 'merchant',
    component: MerchantComponent
  },
  {
    path: 'merchant/map',
    component: MerchantMapComponent
  }
];
