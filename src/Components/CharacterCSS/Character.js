import React, { Fragment } from "react";
import CharacterStats from "./CharacterStats";
import { Becky } from "./becky";

function Character() {
  const character = Becky;

  const title = `Character Sheet: ${character.name} (Level ${
    character.level
  })- ${character.class.name} `;
  return (
    <div className="character-container">
      <h1>{title}</h1>
      <div className="information">
        <div className="ability-score">
          <CharacterStats stats={character.stats} />
        </div>
        <div className="info1">Grid2</div>
        <div className="">Grid2</div>
      </div>
    </div>
  );
}
export default Character;
