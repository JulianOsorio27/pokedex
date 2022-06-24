import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/ResPokedex';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  @Input() pokemon!: Pokemon[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
