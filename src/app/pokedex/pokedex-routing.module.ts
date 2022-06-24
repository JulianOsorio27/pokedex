import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KantoComponent } from './pages/kanto/kanto.component';
import { JohtoComponent } from './pages/johto/johto.component';
import { HoennComponent } from './pages/hoenn/hoenn.component';
import { SinnohComponent } from './pages/sinnoh/sinnoh.component';
import { PokedexComponent } from './pokedex.component';
import { routes as routesList } from '../routes';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    children: [
      { path: routesList.kanto.path, component: KantoComponent },
      { path: routesList.johto.path, component: JohtoComponent },
      { path: routesList.hoenn.path, component: HoennComponent },
      { path: routesList.sinnoh.path, component: SinnohComponent },
      { path: '**', redirectTo: routesList.kanto.path },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
