import Checkbox from "../../components/Checkbox/Checkbox";
import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { login } from "../../api/user";

const fetchUser = async (email, password) => {
  // make post request to api
  return login(email, password).then((data) => {
    if (data) {
      toast("Login realizado com sucesso!", {
        type: "success",
        position: "bottom-center",
      });
    } else {
      toast("Erro ao realizar o login!", {
        type: "error",
        position: "bottom-center",
      });
    }

    return data;
  });
};

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetchUser(email, password).then((user) => {
      if (user) {
        setAuth({
          email: user.email,
          isAdmin: user.isAdmin,
          name: user.name,
          phone: user.phone,
          address: user.address,
          receiver: user.receiver,
          loggedIn: true,
        });
        navigate(-1);
      }
    });
  }

  return (
    <div className="login-outer mt-6 flex justify-center items-center flex-col w-full h-full">
      <div className="login-inner max-w-[450px] mx-auto px-[20px] py-[20px] mb-[20px] ">
        <h1 className="login-page-title text-4xl font-bold tracking-normal text-center mb-10 font-raleway">
          Faça Login para comprar brusinhas!
        </h1>
        <div className="login-fields-container flex justify-center items-stretch flex-col px-[20px] py-[20px] rounded-2xl bg-gray-100">
          <TextField
            required
            label="Endereço de e-mail"
            type="email"
            placeholder="xxx@xxx.xxx"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            required
            label="Sua senha"
            type="password"
            placeholder="****"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="login-fields-container-footer flex justify-between items-center flex-row py-[10px]">
            <Checkbox />
            <FilledButton label="Fazer login" onClick={handleSubmit} />
          </div>
        </div>
        <div className="login-footer flex justify-between items-center flex-row py-[40px]">
          <p className="not-italic font-light text-lg leading-6 flex items-center text-center font-raleway">
            Não possui uma conta?
          </p>
          <Link to="/signup">
            <FilledButton label="Quero me cadastrar!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
