import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// import ng-bootstrap directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { CommoncModule } from './commonc/commonc.module';
import { HomeModule } from './+home/home.module';
import { UserModule } from './+user/user.module';
import { MerchantModule } from './+merchant/merchant.module';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), NgbModule, CommoncModule.forRoot(), HomeModule, UserModule, MerchantModule],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
