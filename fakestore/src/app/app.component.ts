import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  */
  template: `<div>
  <h1>{{title}}</h1>
  <app-products></app-products>
  </div>`
})
export class AppComponent {
  title = 'fakestore';
}
