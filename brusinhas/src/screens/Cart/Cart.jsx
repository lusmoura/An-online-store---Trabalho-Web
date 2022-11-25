import FilledButton from "../../components/FilledButton/FilledButton";
import CartItem from "../../components/CartItem/CartItem";
import tshirt from "../../assets/t-shirt.png";

const items = [
  {
    id: 1,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
    model: "Modelo: Baby Look",
    size: "Tamanho: M",
  },
  {
    id: 2,
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt",
    price: "R$ 50,00",
    category: "camiseta",
    model: "Modelo: Baby Look",
    size: "Tamanho: M",
  },
];

const price = "R$ 100,00";

export default function Cart() {
  return (
    <div className="cart-outer">
      <div className="cart-inner flex flex-row justify-center items-start mt-5 w-full h-full">
        <div className="cart-items mx-[50px] p-8 flex-1 bg-gray-100">
          <h2 className="cart-items-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
            Itens
          </h2>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart-summary mr-[50px] p-8 bg-gray-100">
          <h2 className="cart-total-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
            Resumo
          </h2>
          <p className="num-items">{`Itens: ${items.length}`}</p>
          <p className="total-price">{`Total: ${price}`}</p>
          <hr />
          <FilledButton label="Comprar agora" />
        </div>
      </div>
    </div>
  );
}
