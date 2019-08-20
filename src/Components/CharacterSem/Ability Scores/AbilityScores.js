import React from "react";
import AbilityScoreCard from "./AbilityScoreCard";
import { Container, List, Header } from "semantic-ui-react";

function AbilityScores({ stats }) {
  return (
    <Container>
      <Header ac="h3"> Ability Score </Header>
      <List>
        {stats.map(stat => (
          <AbilityScoreCard
            key={stat.name}
            name={stat.name}
            level={stat.level}
            icon={stat.icon}
            bonuses={stat.bonuses}
          />
        ))}
      </List>
    </Container>
  );
}
export default AbilityScores;

{
  /* <div className="container">
      <h3> Ability Scores </h3>
      <table className="table" style={{ width: "70%" }}>
        <tbody>
          {stats.map(stat => (
            <AbilityScoreCard
              key={stat.name}
              name={stat.name}
              level={stat.level}
              icon={stat.icon}
              bonuses={stat.bonuses}
            />
          ))}
        </tbody>
      </table>
    </div> */
}
