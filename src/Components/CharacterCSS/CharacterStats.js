import React, { Fragment } from "react";
import CharacterStatCard from "./CharacterStatCard";
function CharacterStats({ stats }) {
  return (
    <Fragment>
      {/* <div className="ability-scores"> */}
      <h3 style={{ marignLeft: "1%" }}> Ability Scores </h3>
      <table className="stat-table">
        <tbody>
          {stats.map(stat => (
            <CharacterStatCard
              key={stat.name}
              name={stat.name}
              level={stat.level}
              icon={stat.icon}
            />
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </Fragment>
  );
}
export default CharacterStats;
