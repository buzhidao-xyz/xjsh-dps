import { Routes } from '@angular/router';

import { PublicRoutes } from './+public/index';
import { HomeRoutes } from './+home/index';
import { UserRoutes } from './+user/index';
import { MerchantRoutes } from './+merchant/index';

export const routes: Routes = [
  ...PublicRoutes,
  ...HomeRoutes,
  ...UserRoutes,
  ...MerchantRoutes,
];
