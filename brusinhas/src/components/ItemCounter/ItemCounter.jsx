import FilledButton from "../FilledButton/FilledButton";
// import './style.css'

export default function ItemCounter({
  count = 1,
  handleDecrease = () => {},
  handleIncrease = () => {},
}) {
  return (
    <div className="item-counter-outer flex flex-row items-center h-10">
      <FilledButton rounded={false} label="-" onClick={handleDecrease} />
      <div className="item-count w-24 h-max bg-gray-300 text-center flex items-center justify-center py-[10px] px-[20px]">
        <p className="">{count}</p>
      </div>
      <FilledButton rounded={false} label="+" onClick={handleIncrease} />
    </div>
  );
}
