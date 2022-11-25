import FilledButton from '../../components/FilledButton/FilledButton'
import CartItem from "../../components/CartItem/CartItem";
import tshirt from "../../assets/t-shirt.png";
import "./style.css";

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

const price = 'R$ 100,00';
  
export default function Cart() {
  return (
    <div className="cart-outer">
      <div className="cart-inner">
        <div className="cart-items">
            <h2 className="cart-items-subtitle">Itens</h2>
            {items.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
        <div className="cart-summary">
          <h2 className="cart-total-subtitle">Resumo</h2>
          <p className="num-items">{`Itens: ${items.length}`}</p>
          <p className="total-price">{`Total: ${price}`}</p>
          <hr/>
          <FilledButton label="Comprar agora" />
        </div>
      </div>
    </div>
  )
}
