// Pokemon Res
export interface ResDataPokemons {
    descriptions:    Description[];
    id:              number;
    is_main_series:  boolean;
    name:            string;
    names:           Name[];
    pokemon_entries: PokemonEntry[];
    region:          Region;
    version_groups:  Region[];
}

export interface Description {
    description: string;
    language:    Region;
}

export interface Region {
    name: string;
    url:  string;
}

export interface Name {
    language: Region;
    name:     string;
}

export interface PokemonEntry {
    entry_number:    number;
    pokemon_species: Region;
    image?: string;
    types?: string[];
}

export interface Pokemon {
    id:    number;
    name: string;
    image?: string;
    types?: string[];
}