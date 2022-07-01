import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  */
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{title}}</a>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink='/welcome'>Home</a></li>
      <li><a class="nav-link" routerLink='/products'>Products</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  title = 'fakestore';
}
