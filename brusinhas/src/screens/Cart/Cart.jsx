import FilledButton from "../../components/FilledButton/FilledButton";
import CartItem from "../../components/CartItem/CartItem";
import { centsToReal } from "../../utils";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart,
  clearCart,
}) {
  const navigate = useNavigate();

  return (
    <div className="cart-outer">
      <div className="cart-inner flex flex-row justify-center items-start mt-6 w-full h-full">
        <div className="cart-items flex flex-col gap-4 mx-[50px] p-8 flex-1 bg-gray-100">
          <h2 className="cart-items-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
            Itens
          </h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.model}-${item.size}`}
                quantity={item.quantity}
                {...item}
                handleDecrease={() => {
                  removeFromCart(item.id, item.model, item.size, 1);
                }}
                handleIncrease={() => {
                  addToCart(item.id, item.model, item.size, 1);
                }}
              />
            ))
          ) : (
            <h2>Carrinho vazio</h2>
          )}
        </div>
        <div className="flex flex-col">
          <div className="cart-summary flex flex-col gap-3 mr-[50px] p-8 bg-gray-100">
            <h2 className="cart-total-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
              Resumo
            </h2>
            <p className="num-items">{`Itens: ${cartItems.length}`}</p>
            <p className="total-price">{`Total: ${centsToReal(
              cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )
            )}`}</p>
            <hr />
            <FilledButton
              label="Comprar agora"
              onClick={() => {
                if (cartItems.length === 0) {
                  toast("Carrinho vazio!", {
                    type: "warning",
                    position: "bottom-center",
                  });
                  return;
                }
                navigate("/checkout");
              }}
            />
          </div>
          <div className="mr-[50px] p-8">
            <FilledButton
              label="Limpar carrinho"
              onClick={() => {
                toast("Carrinho limpo", {
                  type: "info",
                  position: "bottom-right",
                });
                clearCart();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
