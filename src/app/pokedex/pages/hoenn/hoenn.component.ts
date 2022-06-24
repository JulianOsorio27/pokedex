import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/ResPokedex';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-hoenn',
  templateUrl: './hoenn.component.html',
  styleUrls: ['./hoenn.component.css']
})
export class HoennComponent implements OnInit {

  pokemon!: Pokemon[];

  constructor(
    private _pokemonService: PokemonService  ) { }

  ngOnInit(): void {
    this.cargarPokedexHoeen();
  }

  cargarPokedexHoeen(){
    this._pokemonService.getPokedexHoeen()
      .subscribe(resp => {
        this.pokemon = resp;
      })
  }

}
