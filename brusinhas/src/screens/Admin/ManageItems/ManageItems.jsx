import ItemManager from "../../../components/ItemManager/ItemManager";
import FilledButton from "../../../components/FilledButton/FilledButton";

import { fetchProducts, createProduct } from "../../../api/product";

import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const getDefaultProduct = (items) => ({
  id: items.reduce((max, item) => (item.id > max ? item.id : max), 0) + 1, // max id + 1
  name: "Camiseta manga curta branca",
  description: "Manga curta, 100% algodão, cor branca",
  alt: "Camiseta manga curta branca",
  title: "Camiseta manga curta branca",
  price: 3000,
  src: "manga-curta-branca.webp",
  category: ["camiseta", "basica"],
  models: [
    {
      type: "Tradicional",
      sizes: [
        {
          size: "P",
          quantity: 4,
        },
        {
          size: "M",
          quantity: 5,
        },
        {
          size: "G",
          quantity: 7,
        },
      ],
    },
    {
      type: "Baby Look",
      sizes: [
        {
          size: "P",
          quantity: 6,
        },
      ],
    },
  ],
});

function addProduct(product) {
  // make post request to api
  createProduct(product).then((status) => {
    if (status === 202) {
      toast("Item adicionado com sucesso!", {
        type: "success",
        position: "bottom-right",
      });
    } else {
      toast("Erro ao adicionar o item!", {
        type: "error",
        position: "bottom-right",
      });
    }
  });
}

export default function ManageItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <div className="flex gap-5 flex-col m-5 items-center">
        <h1 className="text-xl font-bold">Gerenciar items</h1>
        <ItemManager items={items} setItems={setItems} />
        <FilledButton
          label="Adicionar item"
          onClick={() => {
            const newProduct = getDefaultProduct(items);
            addProduct(newProduct);
            setItems([...items, newProduct]);
          }}
        />
      </div>
    </>
  );
}
