import { Component, OnInit } from '@angular/core';

/**
 * This class represents the lazy loaded PublicComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-public',
  templateUrl: 'public.component.html',
  styleUrls: ['public.component.css'],
})

export class PublicComponent implements OnInit {
  errorMessage: string;

  constructor() {}

  ngOnInit() {}
}
