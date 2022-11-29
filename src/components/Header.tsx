interface props {
  gameStarted: boolean;
  setGameSize(value: number): void;
  setGameStatus(value: boolean): void;
}

export const Header = ({ gameStarted, setGameSize, setGameStatus }: props) => {
  const startButtonHandler = () => {
    setGameStatus(!gameStarted);
  };

  const gameSizeHandler = (value: number) => {
    if (gameStarted) return;
    setGameSize(value);
  };
  return (
    <div>
      <div onClick={() => gameSizeHandler(4)}>4</div>
      <div onClick={() => gameSizeHandler(6)}>6</div>
      <div onClick={() => gameSizeHandler(8)}>8</div>
      <div onClick={startButtonHandler}>Start</div>
      <div>Timer</div>
    </div>
  );
};
