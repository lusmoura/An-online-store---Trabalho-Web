import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../api/product";
import CardItem from "../../components/CardItem/CardItem";

import "./style.css";

export default function Home({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setItems(data);
    });
  }, []);

  const match = (category, item) => {
    if (category === "all") {
      return true;
    }

    // if category is array
    if (Array.isArray(item.category)) {
      return item.category.includes(category);
    }

    // if category is string
    return item.category === category;
  };

  return (
    <>
      <main className="container">
        <div className="grid grid-main">
          {items.map((item) => {
            if (match(category, item)) {
              return (
                <Link key={item.id} to={`/item/${item.id}`}>
                  <CardItem {...item} />
                </Link>
              );
            }
          })}
        </div>
      </main>
    </>
  );
}
