interface props {
  isOn: boolean;
  setGameSize(value: number): void;
  setGameStatus(value: boolean): void;
}

export const Header = ({ isOn, setGameSize, setGameStatus }: props) => {
  const startButtonHandler = () => {
    setGameStatus(!isOn);
  };

  const gameSizeHandler = (value: number) => {
    if (isOn) return;
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
