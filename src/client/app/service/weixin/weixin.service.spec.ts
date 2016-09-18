import { provide, ReflectiveInjector } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { BaseRequestOptions, ConnectionBackend, Http, HTTP_PROVIDERS, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { WeixinService } from './weixin.service';

export function main() {
    
}