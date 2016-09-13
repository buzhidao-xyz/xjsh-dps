import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RankingComponent } from './ranking.component';
import { UserService } from '../service/index';

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent, RankingComponent],
    exports: [UserComponent, RankingComponent],
    providers: [UserService]
})

export class UserModule { }
