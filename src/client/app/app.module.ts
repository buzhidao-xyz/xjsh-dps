import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { CommoncModule } from './commonc/commonc.module';
import { HomeModule } from './+home/home.module';
import { UserModule } from './+user/user.module';
import { MerchantModule } from './+merchant/merchant.module';
import { PayModule } from './pay/pay.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), CommoncModule.forRoot(), HomeModule, UserModule, MerchantModule, PayModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
