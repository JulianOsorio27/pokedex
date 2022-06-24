import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/ResPokedex';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.component.html',
  styleUrls: ['./sinnoh.component.css']
})
export class SinnohComponent implements OnInit {

  pokemon!: Pokemon[];

  constructor(
    private _pokemonService: PokemonService  ) { }

  ngOnInit(): void {
    this.cargarPokedexSinnoh();
  }

  cargarPokedexSinnoh(){
    this._pokemonService.getPokedexSinnoh()
      .subscribe(resp => {
        this.pokemon = resp;
      })
  }
}
