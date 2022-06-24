import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { KantoComponent } from './pages/kanto/kanto.component';
import { JohtoComponent } from './pages/johto/johto.component';
import { HoennComponent } from './pages/hoenn/hoenn.component';
import { SinnohComponent } from './pages/sinnoh/sinnoh.component';
import { PokedexComponent } from './pokedex.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PokedexComponent,
    KantoComponent,
    JohtoComponent,
    HoennComponent,
    SinnohComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
