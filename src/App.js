import React from "react";
// import "./App.css";
import HeaderSem from "./Components/Layout/HeaderSem";
// import Character from "./Components/Character/Character";
import Character from "./Components/CharacterSem/Character";
// import Character from "./Components/CharacterCSS/CharacterCSS";
function App() {
  return (
    <div className="App">
      <HeaderSem />
      <div className="main-body">
        <Character />
      </div>
    </div>
  );
}

export default App;
