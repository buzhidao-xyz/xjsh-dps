import { Route } from '@angular/router';
import { PayComponent } from './index';
import { PaymentComponent } from './index';

export const PayRoutes: Route[] = [
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'pay/payment',
    component: PaymentComponent
  }
];
