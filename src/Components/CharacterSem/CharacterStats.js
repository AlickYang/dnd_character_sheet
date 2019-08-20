import React from "react";
import HitPoints from "./HitPoints";
import Skills from "./Skills";
import { Container, Header } from "semantic-ui-react";
function CharacterStats({ hp, ac }) {
  return (
    <Container>
      <Header ac="h3"> Stats </Header>
      <div>
        <HitPoints ac={ac.amount} currentHealth={hp.current} maxHP={hp.max} />
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
