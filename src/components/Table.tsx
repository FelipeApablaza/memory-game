import { useEffect, useState, useCallback } from "react";
import { Card } from "./Card";
import { TableContainer } from "../styled/Table.styles";
interface gameProps {
  gameStarted: boolean;
  winHandler(mistakes: number): void;
  tableSize: number;
}

interface cardProps {
  cardId: number;
  symbolId: number;
  isFlipped: boolean;
}

export const Table = ({ gameStarted, winHandler, tableSize }: gameProps) => {
  const [cardArray, setCardArray] = useState<cardProps[]>([]);
  const [firstCardIdx, setFirstCardIdx] = useState<number>();
  const [secondCardIdx, setSecondCardIdx] = useState<number>();
  const [matches, setMatches] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);

  const getRandomNumber = (tableSize: number) => {
    return Math.floor(Math.random() * tableSize ** 2);
  };

  const getSymbolId = (myCardId: number, tableSize: number) => {
    if (myCardId < tableSize ** 2 / 2) return myCardId;
    else return myCardId - tableSize ** 2 / 2;
  };

  const chooseCard = (
    index: number,
    firstCardIdx?: number,
    secondCardIdx?: number
  ) => {
    if (!gameStarted) return; // not started
    else if (typeof firstCardIdx === "undefined") {
      setFirstCardIdx(index);
      flipCard(index);
    } else if (typeof secondCardIdx === "undefined") {
      setSecondCardIdx(index);
      flipCard(index);
    } else return; // wait until matchHandler
  };

  const flipCard = (index: number) => {
    setCardArray((prevArray) => {
      const newCardArray = prevArray.map((card, mapIdx) => {
        const newCard = { ...card };
        if (index == mapIdx) {
          const isFlipped = newCard.isFlipped;
          newCard.isFlipped = !isFlipped;
        }
        return newCard;
      });
      return newCardArray;
    });
  };

  const matchHandler = (firstCardIdx: number, secondCardIdx: number) => {
    const firstCardSymbolId = cardArray[firstCardIdx].symbolId;
    const secondCardSymbolId = cardArray[secondCardIdx].symbolId;

    if (firstCardSymbolId !== secondCardSymbolId) {
      setTimeout(() => {
        setMistakes((prevMistakes) => prevMistakes + 1);
        flipCard(firstCardIdx);
        flipCard(secondCardIdx);
        setFirstCardIdx(undefined);
        setSecondCardIdx(undefined);
      }, 1500);
    } else {
      setMatches((prevMatches) => prevMatches + 1);
      setFirstCardIdx(undefined);
      setSecondCardIdx(undefined);
    }
  };

  const prepareCards = () => {
    const cardIdsList: number[] = [];
    const newCardArray = [...Array(tableSize ** 2)].map(() => {
      while (true) {
        let myCardId = getRandomNumber(tableSize);
        if (!cardIdsList.includes(myCardId)) {
          cardIdsList.push(myCardId);
          const mySymbolId = getSymbolId(myCardId, tableSize);
          return { cardId: myCardId, symbolId: mySymbolId, isFlipped: false };
        }
      }
    });
    setCardArray(newCardArray);
    setMatches(0);
  };

  useEffect(() => {
    if (
      typeof firstCardIdx !== "undefined" &&
      typeof secondCardIdx !== "undefined"
    ) {
      matchHandler(firstCardIdx, secondCardIdx);
    }
  }, [firstCardIdx, secondCardIdx]);

  useEffect(() => {
    if (!gameStarted) prepareCards();
  }, [tableSize, gameStarted]);

  useEffect(() => {
    if (matches === tableSize ** 2 / 2) winHandler(mistakes);
  }, [matches]);

  return (
    <TableContainer>
      {cardArray.map(({ cardId, isFlipped, symbolId }, index) => (
        <Card
          key={index}
          index={index}
          cardId={cardId}
          isFlipped={isFlipped}
          symbolId={symbolId}
          chooseCard={chooseCard}
        />
      ))}
    </TableContainer>
  );
};
