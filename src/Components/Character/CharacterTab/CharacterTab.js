import React, { useContext } from "react";
import AbilityScores from "../Ability Scores/AbilityScores";
import Skills from "../Skills";
import { Label, Menu, Tab } from "semantic-ui-react";
import { CharacterContext } from "../../../Store/Store";
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
      menuItem: "Skills",
      render: () => (
        <Tab.Pane>
          <Skills />
        </Tab.Pane>
      )
    }
  ];
  return <Tab color="grey" panes={panes} />;
}

export default CharacterTab;
