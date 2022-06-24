import { Component } from '@angular/core';
import { IRoutes, routes } from 'src/app/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent {

  public routes: IRoutes = routes;

  constructor() { }
}
