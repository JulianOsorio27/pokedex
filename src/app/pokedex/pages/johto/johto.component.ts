import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/ResPokedex';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-johto',
  templateUrl: './johto.component.html',
  styleUrls: ['./johto.component.css']
})
export class JohtoComponent implements OnInit {

  pokemon! : Pokemon[];

  constructor(
  private _pokemonService: PokemonService  ) { }

  ngOnInit(): void {
    this.cargarPokedexJohto();
  }

  cargarPokedexJohto( ) {
    this._pokemonService.getPokedexJohto()
      .subscribe( resp => {
        console.log( resp ); 
        this.pokemon = resp
      } )
  }

}
