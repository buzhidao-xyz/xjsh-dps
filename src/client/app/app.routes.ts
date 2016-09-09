import { Routes } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { UserRoutes } from './+user/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...UserRoutes,
];
