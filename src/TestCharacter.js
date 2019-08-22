import React, { Fragment, useContext } from "react";
import { CharacterContext } from "./Resource/CharacterContext";

export default function TestCharacter() {
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <Fragment>
      <h1>
        {character.name} - {character.race}
      </h1>
    </Fragment>
  );
}
