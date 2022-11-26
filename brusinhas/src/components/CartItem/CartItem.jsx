import { centsToReal } from "../../utils";
import ItemCounter from "../ItemCounter/ItemCounter";

export default function CartItem({
  src,
  alt,
  title,
  model,
  size,
  price,

  quantity,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <div className="container flex flex-row justify-between items-center p-2 mt-12 w-full h-full">
      <img src={src} alt={alt} />
      <div className="item-details">
        <h2 className="item-title text-xl font-bold">{title}</h2>
        <p className="item-model text-lg font-light">{model}</p>
        <p className="item-size text-lg font-light">{size}</p>
      </div>
      <ItemCounter
        count={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <h2 className="item-price text-lg font-light">{centsToReal(price)}</h2>
    </div>
  );
}
