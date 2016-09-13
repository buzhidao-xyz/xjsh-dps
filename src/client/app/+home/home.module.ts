import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoncModule } from '../commonc/commonc.module';
import { HomeComponent } from './home.component';
import { MerchantService } from '../service/index';

@NgModule({
    imports: [CommonModule, CommoncModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [MerchantService]
})

export class HomeModule { }
