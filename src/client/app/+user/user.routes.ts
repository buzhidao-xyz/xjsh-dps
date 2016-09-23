import { Route } from '@angular/router';
import { UserComponent } from './index';
import { RankingComponent } from './index';
import { ProfitComponent } from './index';
import { UqrcodeComponent } from './index';

export const UserRoutes: Route[] = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/ranking',
    component: RankingComponent
  },
  {
    path: 'user/profit',
    component: ProfitComponent
  },
  {
    path: 'userqrcode',
    component: UqrcodeComponent
  }
];
