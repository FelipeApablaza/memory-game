import React, { useState } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [tableSize, setTableSize] = useState(4);

  const setGameSize = (value: number) => {
    setTableSize(value);
  };

  const setGameStatus = (value: boolean) => {
    setGameStarted(value);
  };

  return (
    <div>
      <Header
        gameStarted={gameStarted}
        setGameSize={setGameSize}
        setGameStatus={setGameStatus}
      />
      <Table gameStarted={gameStarted} tableSize={tableSize} />
    </div>
  );
}

export default App;
