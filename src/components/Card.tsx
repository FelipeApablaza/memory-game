interface props {
  cardId: number;
  isOn: boolean;
}
export const Card = ({ cardId, isOn }: props) => {
  console.log(cardId);
  return <div>Card Component</div>;
};
