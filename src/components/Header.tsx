import { useEffect, useState } from "react";
import {
  Colons,
  HeaderContainer,
  Minutes,
  Seconds,
  StartButton,
  SizeSelector,
  SizeButton,
  Timer,
} from "../styled/Header.styles";
interface props {
  gameStarted: boolean;
  setGameSize(size: number): void;
  setGameStatus(value: boolean): void;
  tableSize: number;
  win: boolean;
}

export const Header = ({
  gameStarted,
  setGameSize,
  setGameStatus,
  tableSize,
  win,
}: props) => {
  const [seconds, setSeconds] = useState(0);

  const gameSizeHandler = (gameStarted: boolean, size: number) => {
    if (gameStarted) return;
    setGameSize(size);
  };

  const StartButtonHandler = () => {
    if (gameStarted) {
      setGameStatus(false);
      setSeconds(0);
    } else setGameStatus(true);
  };

  useEffect(() => {
    const myInterval = setInterval(
      () =>
        setSeconds(
          (prevSecs) =>
            prevSecs === 99 * 60 + 59 ? 99 * 60 + 59 : prevSecs + 1 // Timer goes till 99 mins and 59 secs
        ),
      1000
    );
    if (gameStarted && !win) return () => clearInterval(myInterval);
    clearInterval(myInterval);
  }, [gameStarted, win]);

  const minutesText =
    Math.floor(seconds / 60) >= 10
      ? Math.floor(seconds / 60)
      : `0${Math.floor(seconds / 60)}`;
  const secondsText = seconds % 60 >= 10 ? seconds % 60 : `0${seconds % 60}`;

  return (
    <HeaderContainer>
      <SizeSelector>
        {[4, 6, 8].map((size) => (
          <SizeButton
            isSelected={size === tableSize}
            isStarted={gameStarted}
            onClick={() => gameSizeHandler(gameStarted, size)}
          >
            {size}x{size}
          </SizeButton>
        ))}
      </SizeSelector>

      <StartButton onClick={StartButtonHandler} isStarted={gameStarted}>
        {gameStarted ? "Restart" : "Start"}
      </StartButton>

      <Timer>
        <Minutes>{minutesText}</Minutes>
        <Colons>:</Colons>
        <Seconds>{secondsText}</Seconds>
      </Timer>
    </HeaderContainer>
  );
};
