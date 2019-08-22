import React, { Fragment, useState } from "react";
import { List, Progress, Button, Image } from "semantic-ui-react";
import CombatIcon from "../Icons/hitPointsIcons/combat.png";
import HealIcon from "../Icons/hitPointsIcons/heal.png";
function HitPoints({ currentHealth, maxHP, ac }) {
  const [hitPoints, setHitPoints] = useState(currentHealth);

  function incrementHealth() {
    setHitPoints(hitPoints + 1);
  }
  function decrementHealth() {
    hitPoints === 0 ? (hitPoints = 0) : setHitPoints(hitPoints - 1);
  }

  const buttons = (
    <Fragment>
      <Button size="mini" style={{ marginLeft: "3px", padding: "4px" }}>
        <Image
          src={CombatIcon}
          size="mini"
          onClick={decrementHealth}
          style={{ width: "20px", height: "20px" }}
        />
      </Button>
      <Button size="mini" style={{ marginLeft: "3px", padding: "4px" }}>
        <Image
          src={HealIcon}
          size="mini"
          onClick={incrementHealth}
          style={{ width: "20px", height: "20px" }}
        />
      </Button>
    </Fragment>
  );

  const healthDisplay = (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {`${hitPoints}/${maxHP}`}
    </p>
  );

  const percentageHealth = (hitPoints / maxHP) * 100;
  let percentage;
  //Change percentage for the progress bar
  percentageHealth >= 100
    ? (percentage = 100)
    : (percentage = percentageHealth);

  return (
    <Fragment>
      <List horizontal>
        <List.Item>
          <List.Content>
            <List.Header>Max HP: {maxHP}</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List.Header>AC: {ac}</List.Header>
          </List.Content>
        </List.Item>
      </List>
      <Progress
        active
        label={healthDisplay}
        size="small"
        color="red"
        percent={percentage}
      />
    </Fragment>
  );
}
export default HitPoints;
