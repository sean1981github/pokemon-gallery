import React from "react";
import "./App.css";
// import pokemonData from "./pokemon/pokemon";
// import PokemonCard from "./component/PokemonCard";
import PokemonGallery from "./component/PokemonGallery";

//const pokemonSelected = pokemonData[10];

function App() {
  return (
    <div className="App">
      <PokemonGallery pokemon />
      {/* <PokemonCard pokemon={pokemonSelected} /> */}
    </div>
  );
}

export default App;
