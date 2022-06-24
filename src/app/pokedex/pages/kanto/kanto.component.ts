import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interface/ResPokedex';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent implements OnInit {

  pokemon! : Pokemon[];

  constructor(
    private pokemonService : PokemonService  ) { }

  ngOnInit(): void {
    this.cargarPokedexKanto();
  }

  cargarPokedexKanto(){
    this.pokemonService.getPokedexKanto()
      .subscribe( resp => {
        // console.log( resp ); 
        this.pokemon =  resp;
      } )
  }

}
