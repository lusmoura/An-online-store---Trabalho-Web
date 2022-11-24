import Checkbox from "../../components/Checkbox/Checkbox";
import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";

import "./style.css";

export default function Login() {
  return (
    <div className="login-outer">
      <div className="login-inner">
        <h1 className="login-page-title">Faça Login para comprar brusinhas!</h1>
        <div className="login-fields-container">
          <TextField
            label="Endereço de e-mail"
            type="email"
            placeholder="xxx@xxx.xxx"
            value=""
            onChange={() => {}}
          />
          <TextField
            label="Sua senha"
            type="password"
            placeholder="****"
            value=""
            onChange={() => {}}
          />
          <div className="login-fields-container-footer">
            <Checkbox />

            <FilledButton label="Fazer login" />
          </div>
        </div>
        <div className="login-footer">
          <p>Não possui uma conta?</p>
          <FilledButton label="Quero me cadastrar!" />
        </div>
      </div>
    </div>
  );
}
