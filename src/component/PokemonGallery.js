import React from "react";
import PokemonCard from "../component/PokemonCard";

const PokemonGallery = ({ pokemons }) => {
  console.log("I'm at pokemongallery");
  return pokemons.map((pokemonSelected) => {
    return <PokemonCard pokemon={pokemonSelected} />;
  });
};

export default PokemonGallery;
