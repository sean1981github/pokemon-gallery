import React from "react";

function elementBackgroundColorSelector(element) {
  const colorMap = [
    { type: "Grass", color: "seagreen" },
    { type: "Poison", color: "thistle" },
    { type: "Fire", color: "orangered" },
    { type: "Flying", color: "lightblue" },
    { type: "Water", color: "turquoise" },
    { type: "Bug", color: "greenyellow" },
    { type: "Normal", color: "white" },
    { type: "Electric", color: "yellow" },
    { type: "Ground", color: "darkgoldenrod" },
    { type: "Fairy", color: "pink" },
  ];

  return colorMap
    .filter((typeOfElement) => typeOfElement.type === element)
    .map((colorType) => {
      return (
        <div class="element" style={{ "background-color": colorType.color }}>
          {element}
        </div>
      );
    });
}

const POKEMONCARD = function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;

  return (
    <div class="pokecard">
      <div class="id">
        <img
          src={
            process.env.PUBLIC_URL + "pokemonImage/" + id.toString() + ".png"
          }
          alt={name.english}
        />
      </div>
      <div class="name">
        {id} : {name.english}
      </div>

      <div class="element-area">
        {type.map((element) => {
          return elementBackgroundColorSelector(element);
        })}
      </div>
      <div class="base-area">
        <div class="hp">HP:{base.HP}</div>
        <div class="attack">Attack:{base.Attack}</div>
        <div class="defence">Defence:{base.Defence}</div>
        <div class="sp-attack">SP-Attack:{base.SpAttack}</div>
        <div class="sp-defence">SP-Defence:{base.SpDefence}</div>
        <div class="speed">Speed:{base.Speed}</div>
      </div>
    </div>
  );
};

export default POKEMONCARD;
