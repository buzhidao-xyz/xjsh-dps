import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoncModule } from '../commonc/commonc.module';
import { MerchantComponent } from './merchant.component';
import { MerchantService } from '../service/index';

@NgModule({
    imports: [CommonModule, CommoncModule],
    declarations: [MerchantComponent],
    exports: [MerchantComponent],
    providers: [MerchantService]
})

export class MerchantModule {
  
}
