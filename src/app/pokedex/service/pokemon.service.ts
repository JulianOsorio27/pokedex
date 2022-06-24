import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonEntry, ResDataPokemons } from '../interface/ResPokedex';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  

  constructor( private _http: HttpClient
      ) { }

  getPokedexKanto( ){

    return this._http.get<ResDataPokemons>( ` ${environment.urlApi}/pokedex/2` )
    .pipe(map((res: ResDataPokemons) => {
      return res.pokemon_entries.map((pokemon: PokemonEntry) => {
        return {
          id: pokemon.entry_number,
          name: pokemon.pokemon_species.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.entry_number}.png`
        }
      })
    }))

  }    


}
