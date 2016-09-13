import { Route } from '@angular/router';
import { UserComponent } from './index';
import { RankingComponent } from './index';

export const UserRoutes: Route[] = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/ranking',
    component: RankingComponent
  }
];
