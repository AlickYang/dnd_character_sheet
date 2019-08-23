import React, { useContext } from "react";
import HitPoints from "./Health/HitPoints";
import Skills from "./Skills";
import Languages from "./Languages";
import { CharacterContext } from "../../Store/Store";
import { Container, Header, Grid } from "semantic-ui-react";

function CharacterStats() {
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <Container>
      <Header ac="h3"> Character Stats </Header>
      <HitPoints
        ac={character.ac.amount}
        currentHP={character.hp.current}
        maxHP={character.hp.max}
      />
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Skills skills={character.skills} />
          </Grid.Column>
          <Grid.Column>
            <Languages languages={character.languages} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Header ac="h3"> Spells </Header>
            Place Holder
          </Grid.Column>
          <Grid.Column>Place Holder</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default CharacterStats;
