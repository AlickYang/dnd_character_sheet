import React from "react";
import { List, Divider, Label, Image, Popup } from "semantic-ui-react";

function AbilityScoreCard({ name, level, icon, bonuses }) {
  const modifierCalc = Math.floor((level - 10) / 2);
  let modifier = "";
  if (modifierCalc > 0) {
    modifier += "+";
    modifier += modifierCalc.toString();
  } else {
    modifier = modifierCalc;
  }

  const bonusList = () => {
    // const text = bonuses.join(" ");
    // return text;
    return bonuses.map(bonus => <p key={bonus}>{bonus}</p>);
  };
  console.log(bonuses);
  return (
    <List.Item style={{ marginLeft: 0, marginRight: 15 }}>
      <Image avatar src={icon} style={{ width: "30px", height: "30px" }} />
      <List.Content>
        <List.Header>
          {bonuses.length === 0 ? (
            <p>{name}</p>
          ) : (
            <Popup
              content={bonusList}
              trigger={<p>{name}</p>}
              position="right center"
            />
          )}
        </List.Header>
        <List.Description>
          {level}
          <b style={{ textAlign: "right" }}>({modifier})</b>
        </List.Description>
      </List.Content>
    </List.Item>
  );
}
export default AbilityScoreCard;
