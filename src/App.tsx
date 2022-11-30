import React, { useState } from "react";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [win, setWin] = useState(false);
  const [tableSize, setTableSize] = useState(4);

  const setGameSize = (size: number) => {
    setTableSize(size);
  };

  const setGameStatus = (value: boolean) => {
    setGameStarted(value);
    if (value) setWin(false);
  };

  const winHandler = (mistakes: number) => {
    console.log("Mistakes:", mistakes);
    setWin(true);
  };

  return (
    <div>
      <Header
        gameStarted={gameStarted}
        setGameSize={setGameSize}
        setGameStatus={setGameStatus}
        tableSize={tableSize}
        win={win}
      />
      <Table
        gameStarted={gameStarted}
        winHandler={winHandler}
        tableSize={tableSize}
      />
    </div>
  );
}

export default App;
