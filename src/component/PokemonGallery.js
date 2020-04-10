import React from "react";
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "../component/PokemonCard";

const POKEMONCARDALL = function PokemonCardAll() {
  return pokemonData.map((pokemonSelected, i) => {
    return <PokemonCard pokemon={pokemonSelected} />;
  });
};
export default POKEMONCARDALL;
