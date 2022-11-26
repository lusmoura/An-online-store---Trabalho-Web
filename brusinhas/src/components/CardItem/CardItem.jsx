import { centsToReal } from "../../utils";
import "./style.css";

export default function CardItem({ src, alt, title, price }) {
  return (
    <div className="container grid-item">
      <img src={src} alt={alt} />
      <h2>{title}</h2>
      <p>{centsToReal(price)}</p>
    </div>
  );
}
