import React from "react";
import AbilityScoreCard from "./AbilityScoreCard";
function AbilityScores({ stats }) {
  return (
    <div className="container">
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
    </div>
  );
}
export default AbilityScores;
