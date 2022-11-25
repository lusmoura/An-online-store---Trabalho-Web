import ItemCounter from "../ItemCounter/ItemCounter";
import "./style.css";

export default function CartItem({ src, alt, title, model, size, price }) {
  return (
    <div className="container">
      <img src={src} alt={alt} />
      <div className="item-details">
        <h2 className="item-title">{title}</h2>
        <p className="item-model">{model}</p>
        <p className="item-size">{size}</p>
      </div>
      <ItemCounter/>
      <h2 className="item-price">{price}</h2>
    </div>
  );
}
