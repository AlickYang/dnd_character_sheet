import React, { useContext } from "react";
import { CharacterProvider } from "./Resource/CharacterContext";
import TestCharacter from "./TestCharacter";
function Test() {
  return (
    <CharacterProvider>
      <div>
        <TestCharacter />
      </div>
    </CharacterProvider>
  );
}
export default Test;
