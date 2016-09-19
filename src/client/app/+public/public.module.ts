import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoncModule } from '../commonc/commonc.module';
import { PublicComponent } from './public.component';

@NgModule({
    imports: [CommonModule, CommoncModule],
    declarations: [PublicComponent],
    exports: [PublicComponent],
    providers: []
})

export class MerchantModule {}
