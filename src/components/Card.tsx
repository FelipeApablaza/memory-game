interface props {
  index: number;
  cardId: number;
  isFlipped: boolean;
  symbolId: number;
  chooseCard(index: number): void;
}
export const Card = ({
  index,
  cardId,
  isFlipped,
  symbolId,
  chooseCard,
}: props) => {
  const cardHandler = () => {
    if (!isFlipped) return chooseCard(index);
  };

  return (
    <div onClick={cardHandler}>
      Card Symbol {symbolId} - {isFlipped ? 1 : 0}
    </div>
  );
};
