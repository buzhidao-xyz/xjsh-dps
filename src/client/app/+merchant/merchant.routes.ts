import { Route } from '@angular/router';
import { MerchantComponent } from './index';

export const MerchantRoutes: Route[] = [
  {
    path: 'merchant/:merchantid',
    component: MerchantComponent
  }
];
