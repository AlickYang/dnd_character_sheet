import React, { Fragment } from "react";
import { List, Progress } from "semantic-ui-react";
function HitPoints({ currentHealth, maxHP, ac }) {
  const healthDisplay = `${currentHealth}/${maxHP}`;
  const percentageHealth = (currentHealth / maxHP) * 100;
  let percentage;
  if (percentageHealth >= 100) {
    percentage = 100;
  } else {
    percentage = percentageHealth;
  }
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
