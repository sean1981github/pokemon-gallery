import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPokemonName: "",
    };
  }

  handleChange = (event) => {
    this.setState({ searchPokemonName: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchPokemonName}
          onChange={this.handleChange}
          placeholder="Please input name of pokemon to search"
        />
        <button
          onClick={() => {
            this.props.fetchPokemonFromGallery(this.state.searchPokemonName);
          }}
        >
          Search pokemon
        </button>
      </div>
    );
  }
}
export default SearchBar;
