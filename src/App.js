import React from "react";
import "./App.css";
// import pokemonData from "./pokemon/pokemon";
// import PokemonCard from "./component/PokemonCard";
//import PokemonGallery from "./component/PokemonGallery";
import SearchablePokemonGallery from "./component/SearchablePokemonGallery";

//const pokemonSelected = pokemonData[10];

function App() {
  return (
    <div className="App">
      <SearchablePokemonGallery />
      {/* <PokemonCard pokemon={pokemonSelected} /> */}
    </div>
  );
}

export default App;
