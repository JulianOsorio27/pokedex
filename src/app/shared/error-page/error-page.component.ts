import { Component, OnInit } from '@angular/core';
import { IRoutes, routes } from 'src/app/routes';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styles: [
  ]
})
export class ErrorPageComponent implements OnInit {

  public routes: IRoutes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
