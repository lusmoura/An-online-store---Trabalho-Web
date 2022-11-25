import { Link } from "react-router-dom";
import tshirt from "../../assets/t-shirt.png";
import CardItem from "../../components/CardItem/CardItem";

import "./style.css";

const items = [
  {
    id: 1,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
  },
  {
    id: 2,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
  },
  {
    id: 3,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
  },
  {
    id: 4,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
  },
];

export default function Home() {
  return (
    <>
      <main className="container">
        <div className="grid grid-main">
          {items.map((item) => (
            <Link key={item.id} to={`/item/${item.id}`}>
              <CardItem {...item} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
