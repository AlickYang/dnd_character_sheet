import React, { useContext } from "react";
import AbilityScores from "./CharacterTab/Ability Scores/AbilityScores";

import { Label, Menu, Tab } from "semantic-ui-react";
import { CharacterContext } from "../../Store/Store";
function CharacterTab({ stats }) {
  const [character, setCharacter] = useContext(CharacterContext);

  //Attributes, Combat abilities, Civil Abilities, Talents, Tags
  const panes = [
    {
      menuItem: "Ability Scores",
      render: () => (
        <Tab.Pane>
          <AbilityScores stats={character.ability_score} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Rogue Table",
      render: () => <Tab.Pane>Rogue Table</Tab.Pane>
    }
  ];
  return (
    <Tab
      menu={{ secondary: true, pointing: true }}
      color="grey"
      panes={panes}
    />
  );
}

export default CharacterTab;
