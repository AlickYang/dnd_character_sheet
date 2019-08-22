import React, { createContext, useState } from "react";
import CharacterInfo from "../Resource/CharacterInfo";
//Contexts
export const CharacterContext = createContext();

function Store({ children }) {
  const [character, setCharacter] = useState(CharacterInfo);
  return (
    <CharacterContext.Provider value={[character, setCharacter]}>
      {children}
    </CharacterContext.Provider>
  );
}

export default Store;
