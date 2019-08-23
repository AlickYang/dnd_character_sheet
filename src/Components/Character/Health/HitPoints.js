import React, { Fragment, useState } from "react";
import { List, Button, Image, Container } from "semantic-ui-react";

import CombatButton from "./CombatButton";
import HealIcon from "../../Icons/hitPointsIcons/heal.png";
import HealthBar from "./HealthBar";
function HitPoints({ currentHP, maxHP, ac }) {
  const [hitPoints, setHitPoints] = useState(currentHP);

  const buttons = (
    <Fragment>
      <Button size="mini" style={{ marginLeft: "3px", padding: "4px" }}>
        <Image
          src={HealIcon}
          size="mini"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <Container>
        <List floated="right" style={{ marginBottom: "10px" }}>
          <List.Item>
            <List.Content verticalAlign="top">
              <CombatButton />
            </List.Content>
          </List.Item>
        </List>
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
      </Container>
      <HealthBar maxHP={maxHP} currentHP={hitPoints} />
    </Fragment>
  );
}
export default HitPoints;
