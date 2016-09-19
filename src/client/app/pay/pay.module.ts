import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoncModule } from '../commonc/commonc.module';
import { PayComponent } from './pay.component';
import { WeixinService } from '../service/index';

@NgModule({
    imports: [CommonModule, CommoncModule],
    declarations: [PayComponent],
    exports: [PayComponent],
    providers: [WeixinService]
})

export class PayModule {}
