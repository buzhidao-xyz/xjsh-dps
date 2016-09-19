import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Config, NavbarComponent, ToolbarComponent } from './commonc/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent],
  styleUrls: ['app.component.css']
})

export class AppComponent {
  constructor(public router: Router, public aroute: ActivatedRoute) {
    console.log('Environment config', Config);

    this.aroute.queryParams.subscribe(
      params => {
        var action = params['action'];
        switch (action) {
          case 'user':
            this.router.navigate(['/user']);
          break;
          default:
          break;
        }
      }
    );
  }
}
