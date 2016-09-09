import { TestComponentBuilder } from '@angular/core/testing';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { Component } from '@angular/core';
import {
  inject,
  async
} from '@angular/core/testing';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

import { UserComponent } from './user.component';

export function main() {
  describe('User component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => { providerArr = [disableDeprecatedForms(), provideForms()]; });

    it('should work',
      async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((rootTC: any) => {
            let userDOMEl = rootTC.debugElement.children[0].nativeElement;

	    expect(getDOM().querySelectorAll(userDOMEl, 'h2')[0].textContent).toEqual('Features');
          });
        })));
    });
}

@Component({
  selector: 'test-cmp',
  directives: [UserComponent],
  template: '<sd-user></sd-user>'
})
class TestComponent {}
