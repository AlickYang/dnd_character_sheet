import React from "react";
import AbilityScores from "./AbilityScores";
import CharacterStats from "./CharacterStats";
import { Becky } from "./becky";

function Character() {
  const character = Becky;
  const title = `Character Sheet: ${character.name} (Level ${
    character.level
  })- ${character.class.name} `;
  return (
    <div className="container" style={{ marginTop: "1%" }}>
      <h1>{title}</h1>
      <div className="row">
        <div className="col">
          <AbilityScores stats={character.ability_score} />
        </div>
        <div className="col">
          <CharacterStats hp={character.hp} ac={character.ac} />
        </div>

        <div className="col">Hello other side</div>
      </div>
    </div>
  );
}
export default Character;
