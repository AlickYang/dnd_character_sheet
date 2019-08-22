import React, { useContext } from "react";
import HitPoints from "./HitPoints";
import { CharacterContext } from "../../Store/Store";
import { Container, Header } from "semantic-ui-react";

function CharacterStats() {
  // const character = Becky;
  const [character, setCharacter] = useContext(CharacterContext);
  return (
    <Container>
      <Header ac="h3"> Stats </Header>
      <div>
        <HitPoints
          ac={character.ac.amount}
          currentHealth={character.hp.current}
          maxHP={character.hp.max}
        />
      </div>
      <Header ac="h3"> Skills </Header>
      <div className="row">Place Holder </div>
    </Container>
  );
}

export default CharacterStats;

// {stats.map(stat => (
// 	<div className="card-body" style={{ display: "flex" }}>
// 		<img
// 			src={stat.icon}
// 			alt={stat.name}
// 			style={{ height: "30px", width: "30px", margin: 5 }}
// 		/>
// 		<h5> {stat.name} </h5>
// 		<p>{stat.amount}</p>
// 	</div>
// ))}
