import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";

export default function Signup() {
  return (
    <div className="signup-outer flex items-center flex-col w-full h-full">
      <div className="signup-inner pt-6 max-w-[450px]">
        <h1 className="signup-page-title text-4xl font-bold tracking-normal text-center mb-10 font-raleway">
          Se cadastre para comprar brusinhas!
        </h1>
        <div className="signup-fields-container flex justify-center items-stretch flex-col px-[20px] py-[20px] bg-gray-100 rounded-2xl">
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

          <div className="signup-fields-container-footer flex justify-end items-end flex-row py-[20px]">
            <FilledButton label="Fazer cadastro" />
          </div>
        </div>
        <div className="signup-footer flex justify-between items-center flex-row py-[40px]">
          <p className=" not-italic font-light text-lg leading-6 flex items-center text-center font-raleway">
            Já possui uma conta?
          </p>
          <FilledButton label="Fazer login!" />
        </div>
      </div>
    </div>
  );
}
