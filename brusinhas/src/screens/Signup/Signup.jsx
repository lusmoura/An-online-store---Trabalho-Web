import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";

export default function Signup() {
  return (
    <div className="signup-outer">
      <div className="signup-inner">
        <h1 className="signup-page-title">
          Se cadastre para comprar brusinhas!
        </h1>
        <div className="signup-fields-container">
          <TextField
            label="Seu nome"
            type="name"
            placeholder="Maria da Silva"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Endereço"
            type="address"
            placeholder="Rua dos Alfreneiros, 4"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Endereço de e-mail"
            type="email"
            placeholder="xxx@xxx.xxx"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Telefone"
            type="phone"
            placeholder="(xx) xxxxx-xxxx"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Senha"
            type="password"
            placeholder="****"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Confirme sua senha"
            type="password"
            placeholder="****"
            value=""
            onChange={() => {}}
          />

          <div className="signup-fields-container-footer">
            <FilledButton label="Fazer cadastro" />
          </div>
        </div>
        <div className="signup-footer">
          <p>Já possui uma conta?</p>
          <FilledButton label="Fazer login!" />
        </div>
      </div>
    </div>
  );
}
