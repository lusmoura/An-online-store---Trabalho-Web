import tshirt from "../../assets/t-shirt.png";
import FilledButton from "../FilledButton/FilledButton";

function fetchItem(id) {
  return {
    id: id,
    name: "Camiseta manga curta",
    price: "R$ 20,00",
    description: "Camiseta manga curta, 100% algodão, cor branca",
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 10,
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
  };
}

export default function ItemListing({ id }) {
  const fetchedItem = fetchItem(id);

  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <img
        className="object-cover w-36 h-36"
        src={tshirt}
        alt="item thumbnail"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-bold">{fetchedItem.name}</h1>
          <p className="text-lg font-light">{fetchedItem.description}</p>
        </div>
        <p className="text-lg font-bold">{fetchedItem.price}</p>
        <div>
          <h3>Modelagem</h3>
          <div className="flex flex-row gap-2">
            {fetchedItem.models.map((model, idx) => (
              <button key={idx} className="bg-gray-200 font-light rounded p-3">
                {model.type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3>Tamanho</h3>
          <div className="flex flex-row gap-2 flex-grow">
            <button className="bg-gray-200 min-w-[50px] min-h-[50px] font-light rounded-full p-3">
              P
            </button>
            <button className="bg-gray-200 min-w-[50px] min-h-[50px] font-light rounded-full p-3">
              M
            </button>
            <button className="bg-gray-200 min-w-[50px] min-h-[50px] font-light rounded-full p-3">
              G
            </button>
            <button className="bg-gray-200 min-w-[50px] min-h-[50px] font-light rounded-full p-3">
              GG
            </button>
            <button className="bg-gray-200 min-w-[50px] min-h-[50px] font-light rounded-full p-3">
              XGG
            </button>
          </div>
        </div>
        <div>
          <h3>Quantidade</h3>
          <p>1</p>
        </div>
        <div className="flex gap-3">
          <FilledButton label="Comprar agora" />
          <FilledButton label="Adicionar ao carrinho" />
        </div>
      </div>
    </div>
  );
}
