import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RankingComponent } from './ranking.component';
import { UqrcodeComponent } from './uqrcode.component';
import { UserService, WeixinService } from '../service/index';

@NgModule({
    imports: [CommonModule],
    declarations: [UserComponent, RankingComponent, UqrcodeComponent],
    exports: [UserComponent, RankingComponent, UqrcodeComponent],
    providers: [UserService, WeixinService]
})

export class UserModule { }
