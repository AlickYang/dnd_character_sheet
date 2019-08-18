import React from "react";
function CharacterStatCard({ name, level, icon }) {
  const modifier = Math.floor((level - 10) / 2);

  return (
    <tr className="stat-item">
      <td className="stat-name">
        <img
          src={icon}
          alt={name}
          style={{ height: "30px", width: "30px", marginRight: "10%" }}
        />
        <p>{name}</p>
      </td>
      <td className="stat-info">
        <p>{level}</p>
      </td>
      <td className="stat-mod">
        <p>({modifier})</p>
      </td>
    </tr>
  );
}
export default CharacterAbilityScoresCard;
