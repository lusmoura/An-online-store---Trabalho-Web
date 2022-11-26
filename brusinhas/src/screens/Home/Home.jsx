import { Link } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem";
import mock from "../../mock";

import "./style.css";

export default function Home() {
  let items = mock.items;
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
