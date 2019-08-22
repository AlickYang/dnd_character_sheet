import React from "react";
import Header from "./Components/Layout/Header";
import Character from "./Components/Character/Character";
import Store from "./Store";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-body">
        <Character />
      </div>
    </div>
  );
}

export default App;
