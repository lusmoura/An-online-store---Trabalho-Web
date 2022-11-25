import FilledButton from '../../components/FilledButton/FilledButton'
import TextField from '../../components/TextField/TextField'
import "./style.css";

export default function Checkout() {
    let num_items = 2;
    let price = 80.00;
    return (
    <div className="checkout-outer">
      <div className="checkout-inner">
        <h1 className="checkout-page-title">Sacola</h1>
        <div className='purchase-info'>
          <p className='num-items'>{`Itens: ${num_items}`}</p>
          <p className='total-price'>{`Total: R$ ${price}`}</p>
        </div>
        <hr/>
        <div className='checkout-address'>
          <h2 className='checkout-page-subtitle'>Entrega</h2>
          <div className="checkout-address-form">
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
        <hr/>
        <div className="checkout-payment">
          <h2 className="checkout-page-subtitle">Pagamento</h2>
          <div className="checkout-payment-form">
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
      <FilledButton label="Finalizar"/>
    </div>
  )
}
