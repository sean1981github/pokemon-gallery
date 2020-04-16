import React from "react";
import PokemonGallery from "./PokemonGallery";
import SearchBar from "./SearchBar";
import axios from "axios";
import Loader from "./Loader";

class SearchablePokemonGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDisplay: [],
      pokemonData: [],
      filterPokemonName: "",
      isLoading: false,
    };
  }

  fetchPokemonViaAPI = () => {
    this.setState({ isLoading: true });
    const URL =
      "https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData";

    axios(URL).then((res) => {
      this.setState({
        isLoading: false,
        pokemonData: res.data,
        pokemonDisplay: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchPokemonViaAPI();
  }

  handleChange = (filterPokemonName) => {
    const currSearchValue = filterPokemonName.toLowerCase();

    if (currSearchValue === "" || !currSearchValue.length) {
      this.setState({ pokemonDisplay: this.state.pokemonData });
    } else {
      const matchedPokemons = this.state.pokemonData.filter((currentPokemon) =>
        currentPokemon.name.english.toLowerCase().includes(currSearchValue)
      );

      this.setState({ pokemonDisplay: matchedPokemons });
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <SearchBar fetchPokemonFromGallery={this.handleChange} />
        )}

        <div class="App">
          <PokemonGallery pokemons={this.state.pokemonDisplay} />
        </div>
      </div>
    );
  }
}

export default SearchablePokemonGallery;
