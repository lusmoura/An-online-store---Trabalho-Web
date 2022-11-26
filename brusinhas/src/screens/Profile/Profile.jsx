import { useEffect } from "react";
import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";

export default function Profile({auth}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.email === "") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="profile-outer mt-12 flex justify-center items-center flex-col w-full h-full">
      <div className="profile-inner p-8 bg-gray-100 w-[90%]">
        <h1 className="profile-page-title text-4xl font-bold tracking-normal mb-10 font-raleway">
          Perfil
        </h1>
        <div className="profile-data mb-[20px]">
          <h2 className="profile-page-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
            Dados
          </h2>
          <div className="profile-data-form flex justify-between items-center flex-row">
            <TextField
              label="Nome"
              type="nome"
              placeholder="Maria da Silva"
              value="Maria da Silva"
              onChange={() => {}}
            />
            <TextField
              label="Telefone"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value="(00) 00000-0000"
              onChange={() => {}}
            />
            <TextField
              label="E-mail"
              type="email"
              placeholder="xxx@xxx.xxx"
              value="mariadasilva@gmail.com"
              onChange={() => {}}
            />
            <TextField
              label="Senha"
              type="password"
              placeholder="********"
              value="********"
              onChange={() => {}}
            />
          </div>
        </div>
        <hr />
        <div className="profile-address">
          <h2 className="profile-page-subtitle text-4xl font-bold tracking-normal mb-2 font-raleway">
            Endereço
          </h2>
          <div className="profile-address-form flex justify-between items-center flex-row">
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
      </div>
      <FilledButton label="Salvar" />
    </div>
  );
}
