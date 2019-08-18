import React from "react";
function AbilityScoreCard({ name, level, icon, bonuses }) {
  const modifierCalc = Math.floor((level - 10) / 2);
  let modifier = "";
  if (modifierCalc > 0) {
    modifier += "+";
    modifier += modifierCalc.toString();
  } else {
    modifier = modifierCalc;
  }

  return (
    <tr className="table-primary" style={{ fontWeight: 700 }}>
      <th scope="row" style={{ display: "flex", paddingRight: 0 }}>
        <img
          src={icon}
          alt={name}
          style={{ height: "30px", width: "30px", marginRight: "10%" }}
        />
        <p>{name}</p>
      </th>
      <td style={{ textAlign: "center" }}>
        <p>{level}</p>
      </td>
      <td style={{ textAlign: "center" }}>({modifier})</td>
      <td style={{ width: "auto" }}>
        {bonuses.map(bonus => (
          <p
            key={bonus}
            style={{ marginBottom: 0, fontWeight: 400, fontSize: "12px" }}
          >
            {bonus}
          </p>
        ))}
      </td>
    </tr>
  );
}
export default AbilityScoreCard;
