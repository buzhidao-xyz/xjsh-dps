import { Route } from '@angular/router';
import { MerchantComponent } from './index';
import { MerchantMapComponent } from './index';

export const MerchantRoutes: Route[] = [
  {
    path: 'merchant/:merchantid',
    component: MerchantComponent
  },
  {
    path: 'merchant/map/:merchantid',
    component: MerchantMapComponent
  }
];
