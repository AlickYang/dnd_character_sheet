import React from "react";
import { Header, Icon, Grid, Segment, Container } from "semantic-ui-react";
import CharacterTab from "./CharacterTab";
import CharacterStats from "./CharacterStats";
import { Becky } from "../Resource/becky";

function Character() {
  const character = Becky;
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
              <CharacterTab stats={character.ability_score} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <CharacterStats hp={character.hp} ac={character.ac} />
            </Segment>
            <Segment> Equipment </Segment>
          </Grid.Column>
          {/* <Grid.Column width={3}>
            <Segment> Background </Segment>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Container>
  );
}
export default Character;

// return (
//     <div className="container" style={{ marginTop: "1%" }}>
//       <h1>{title}</h1>
//       <div className="row">
//         <div className="col">
//           <AbilityScores stats={character.ability_score} />
//         </div>
//         {/* <div className="col">
//           <CharacterStats hp={character.hp} ac={character.ac} />
//         </div> */}

//         <div className="col">Hello other side</div>
//       </div>
//     </div>
//   );
