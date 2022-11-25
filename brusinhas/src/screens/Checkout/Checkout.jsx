import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";

export default function Checkout() {
  const num_items = 2;
  const price = "R$ 100,00";

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
              label="CEP"
              type="text"
              placeholder="xxxxx-xxx"
              value="00000-000"
              onChange={() => {}}
            />
            <TextField
              label="Endereço"
              type="text"
              placeholder="Rua das Flores, 123"
              value="Rua das Flores, 123"
              onChange={() => {}}
            />
            <TextField
              label="Destinatário"
              type="text"
              placeholder="Maria da Silva"
              value="Maria da Silva"
              onChange={() => {}}
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
              value=""
              onChange={() => {}}
            />
            <TextField
              label="Número do cartão"
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
              value=""
              onChange={() => {}}
            />
            <TextField
              label="Validade"
              type="text"
              placeholder="xx/xx"
              value=""
              onChange={() => {}}
            />
            <TextField
              label="CVV"
              type="text"
              placeholder="xxx"
              value=""
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <FilledButton label="Finalizar" />
    </div>
  );
}
