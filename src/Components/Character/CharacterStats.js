import React from "react";
import HitPoints from "./CharacterStats/HitPoints";

function CharacterStats({ hp, ac }) {
  const currentHealth = (hp.current / hp.max) * 100;
  const percentage = currentHealth + "%";
  return (
    <div className="container">
      <h3> Stats </h3>
      <div>
        <HitPoints
          ac={ac.amount}
          percentage={percentage}
          currentHealth={hp.current}
          maxHP={hp.max}
        />
      </div>
      <h3> Skills </h3>
      <div className="row">
        <div className="col"> asddas </div>
      </div>
    </div>
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
