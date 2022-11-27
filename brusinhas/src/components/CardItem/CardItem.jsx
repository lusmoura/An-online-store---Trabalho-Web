import { centsToReal } from "../../utils";

export default function CardItem({ src, alt, title, price }) {
  return (
    <div className="flex flex-col text-center justify-center items-center gap-3">
      <img className="block h-max w-32 object-contain" src={src} alt={alt} />
      <div>
        <h2 className="font-bold">{title}</h2>
        <p>{centsToReal(price)}</p>
      </div>
    </div>
  );
}
