import React, { useState } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [tableSize, setTableSize] = useState(4);

  const setGameSize = (value: number) => {
    setTableSize(value);
  };

  const setGameStatus = (value: boolean) => {
    setIsOn(value);
  };

  return (
    <div>
      <Header
        isOn={isOn}
        setGameSize={setGameSize}
        setGameStatus={setGameStatus}
      />
      <Table isOn={isOn} tableSize={tableSize} />
    </div>
  );
}

export default App;
