import React, { useContext } from "react";
import { Header, Icon, Grid, Segment, Container } from "semantic-ui-react";
import CharacterTab from "./CharacterTab/CharacterTab";
import CharacterStats from "./CharacterStats";
import { CharacterContext } from "../../Store/Store";
function Character() {
  const [character, setCharacter] = useContext(CharacterContext);

  const title = `Character Sheet: ${character.name} (Level ${
    character.level
  })- ${character.class.name} `;

  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>{title}</Header.Content>
      </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Segment>
              <CharacterTab />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <CharacterStats />
            </Segment>
            <Segment> Equipment </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
export default Character;
