import React from "react";
import { Progress } from "semantic-ui-react";
function HealthBar({ maxHP, currentHP }) {
  const percentageHealth = (currentHP / maxHP) * 100;
  let percentage;
  //Change percentage for the progress bar
  percentageHealth >= 100
    ? (percentage = 100)
    : (percentage = percentageHealth);

  const healthDisplay = (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {`${currentHP}/${maxHP}`}
    </p>
  );

  return (
    <Progress
      active
      label={healthDisplay}
      size="small"
      color="red"
      percent={percentage}
    />
  );
}
export default HealthBar;
