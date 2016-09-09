import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { MerchantService } from '../shared/merchant/index';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [MerchantService]
})

export class HomeModule { }
