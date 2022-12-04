import { centsToReal } from "../../utils";
import ItemCounter from "../ItemCounter/ItemCounter";

export default function CartItem({
  src,
  alt,
  name,
  model,
  size,
  price,

  quantity,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <div className="container flex flex-row justify-between items-center w-full h-full">
      <img className="h-32 w-32" src={`/assets/${src}`} alt={alt} />
      <div className="item-details">
        <h2 className="item-name text-xl font-bold">{name}</h2>
        <p className="item-model text-lg font-light">{model}</p>
        <p className="item-size text-lg font-light">{size}</p>
      </div>
      <ItemCounter
        count={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <h2 className="item-price text-xl">{centsToReal(price)}</h2>
    </div>
  );
}
