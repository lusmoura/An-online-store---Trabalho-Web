import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { centsToReal } from "../../utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Checkout({ cartItems, auth, clearCart }) {
  const navigate = useNavigate();
  const num_items = cartItems.length;
  const price = centsToReal(
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );

  const [form, setForm] = useState({
    address: auth.address,
    receiver: auth.receiver,
    payerName: "",
    cardNumber: "",
    cardCvv: "",
    cardExpiration: "",
  });

  function validateCardNumber() {
    const number = form.cardNumber.replace(/\s/g, "");
    return number.length === 16 && !isNaN(number);
  }

  function validateCardCVV() {
    return form.cardCvv.length === 3 && !isNaN(form.cardCvv);
  }

  function validateCardExpiration() {
    const date = form.cardExpiration.split("/");
    return date.length === 2 && !isNaN(date[0]) && !isNaN(date[1]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (const property in form) {
      if (form[property] === "") {
        toast("Preencha todos os campos!", {
          type: "warning",
          position: "bottom-center",
        });
        return;
      }
    }

    if (!validateCardNumber()) {
      toast("Número do cartão inválido!", {
        type: "warning",
        position: "bottom-center",
      });
      return;
    }

    if (!validateCardCVV()) {
      toast("CVV do cartão inválido!", {
        type: "warning",
        position: "bottom-center",
      });
      return;
    }

    if (!validateCardExpiration()) {
      toast("Data de expiração do cartão inválida!", {
        type: "warning",
        position: "bottom-center",
      });
      return;
    }

    clearCart();
    navigate("/");
    toast("Compra realizada com sucesso!", {
      position: "bottom-center",
      type: "success",
    });
  }

  return (
    <div className="checkout-outer mt-12 flex justify-center items-center flex-col w-full h-full">
      <div className="checkout-inner p-8 w-[90%] bg-gray-100">
        <h1 className="checkout-page-title text-4xl font-bold tracking-normal mb-2 font-raleway">
          Sacola
        </h1>
        <div className="purchase-info mb-5">
          <p className="num-items">{`Itens: ${num_items}`}</p>
          <p className="total-price">{`Total: ${price}`}</p>
        </div>
        <hr />
        <div className="checkout-address">
          <h2 className="checkout-page-subtitle text-4xl font-bold tracking-normal mb-0 font-relaway">
            Entrega
          </h2>
          <div className="checkout-address-form flex justify-between items-end flex-row">
            <TextField
              label="Endereço"
              type="text"
              placeholder="Rua das Flores, 123"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Destinatário"
              type="text"
              placeholder="Maria da Silva"
              name="receiver"
              value={form.receiver}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <hr />
        <div className="checkout-payment">
          <h2 className="checkout-page-subtitle text-4xl font-bold tracking-normal mb-0 font-relaway">
            Pagamento
          </h2>
          <div className="checkout-payment-form flex justify-between items-end flex-row">
            <TextField
              label="Nome do titular"
              type="nome"
              placeholder="Maria da Silva"
              name="payerName"
              value={form.payerName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Número do cartão"
              type="text"
              placeholder="1234567891011121"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              required
              maxLength="16"
            />
            <TextField
              label="Validade"
              type="text"
              placeholder="xx/xx"
              name="cardExpiration"
              value={form.cardExpiration}
              onChange={handleChange}
              required
            />
            <TextField
              label="CVV"
              type="text"
              placeholder="xxx"
              name="cardCvv"
              value={form.cardCvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <FilledButton label="Finalizar" onClick={handleSubmit} />
    </div>
  );
}
