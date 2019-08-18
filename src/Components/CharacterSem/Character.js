import React from "react";
import { Header, Icon, Grid, Segment, Container } from "semantic-ui-react";
import AbilityScores from "./AbilityScores";
import CharacterStats from "./CharacterStats";
import { Becky } from "../Resource/becky";

const grid = (
  <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment> 1 </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment> 1 </Segment>
        <Segment> 2 </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

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
          <Grid.Column width={3}>
            <Segment>
              <AbilityScores stats={character.ability_score} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment>
              <CharacterStats hp={character.hp} ac={character.ac} />
            </Segment>
            <Segment> 2 </Segment>
          </Grid.Column>
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
