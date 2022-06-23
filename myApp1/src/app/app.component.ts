import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : 
  `<div>
  <h1>{{pageTitle}}</h1>
  <app-employee></app-employee>
  </div>`
})

export class AppComponent{
  pageTitle : string = 'Sample Angular application'
}
