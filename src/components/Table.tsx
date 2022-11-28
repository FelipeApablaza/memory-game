import { useEffect, useState } from "react";
import { Card } from "./Card";

interface props {
  isOn: boolean;
  tableSize: number;
}

export const Table = ({ isOn, tableSize }: props) => {
  const [myArray, setMyArray] = useState<number[]>([]);

  const getRandomNumber = (tableSize: number) => {
    return Math.floor(Math.random() * tableSize ** 2);
  };

  const getCardId = (item: number, tableSize: number) => {
    if (item < tableSize ** 2 / 2) return item;
    else return item - tableSize ** 2 / 2;
  };

  useEffect(() => {
    const numberList: number[] = [];
    const newArray = [...Array(tableSize ** 2)].map(() => {
      while (true) {
        let myNumber = getRandomNumber(tableSize);
        if (!numberList.includes(myNumber)) {
          numberList.push(myNumber);
          return myNumber;
        }
      }
    });
    setMyArray(newArray);
  }, [tableSize]);

  return (
    <div>
      {myArray.map((item, index) => (
        <Card key={index} cardId={getCardId(item, tableSize)} isOn={isOn} />
      ))}
    </div>
  );
};
