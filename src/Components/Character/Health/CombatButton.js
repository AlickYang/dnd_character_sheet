import React, { useState, Fragment } from "react";
import CombatIcon from "../../Icons/hitPointsIcons/combat.png";
import CombatModal from "./CombatModal";
import { Button, Image, Modal } from "semantic-ui-react";

function CombatButton() {
  const [isCombat, setIsCombat] = useState(false);
  function setCombat() {
    setIsCombat(true);
  }

  function endCombat() {
    setIsCombat(false);
  }

  function saveCombat() {}
  return (
    <Fragment>
      <Button
        size="mini"
        onClick={setCombat}
        style={{
          padding: "4px",
          position: "relative",
          marginTop: "-15%"
        }}
      >
        <Image
          src={CombatIcon}
          size="mini"
          style={{
            width: "18px",
            height: "18px"
          }}
        />
      </Button>
      <CombatModal open={isCombat} onOpen={setCombat} onClose={endCombat} />
    </Fragment>
  );
}

export default CombatButton;
