import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Signup({ setAuth, users, setUsers }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
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

    if (form.password !== form.confirmPassword) {
      toast("Senhas não conferem", {
        type: "warning",
        position: "bottom-center",
      });
      return;
    }

    const user = users.find((user) => user.email === form.email);

    if (user) {
      toast("Usuário já cadastrado", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }

    setAuth({
      isAdmin: false,
      receiver: form.name,
      loggedIn: true,
      ...form,
    });

    setUsers([...users, form]);

    navigate("/");
  }

  return (
    <div className="signup-outer flex items-center flex-col w-full h-full">
      <div className="signup-inner pt-6 max-w-[450px]">
        <h1 className="signup-page-title text-4xl font-bold tracking-normal text-center mb-10 font-raleway">
          Se cadastre para comprar brusinhas!
        </h1>
        <div className="signup-fields-container flex justify-center items-stretch flex-col px-[20px] py-[20px] bg-gray-100 rounded-2xl">
          <TextField
            required
            label="Seu nome"
            type="name"
            name="name"
            placeholder="Maria da Silva"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Endereço"
            type="address"
            name="address"
            placeholder="Rua dos Alfreneiros, 4"
            value={form.address}
            onChange={handleChange}
          />
          <TextField
            required
            label="Endereço de e-mail"
            type="email"
            name="email"
            placeholder="xxx@xxx.xxx"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            required
            label="Telefone"
            type="phone"
            name="phone"
            placeholder="(xx) xxxxx-xxxx"
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            required
            label="Senha"
            type="password"
            name="password"
            placeholder="****"
            value={form.password}
            onChange={handleChange}
          />
          <TextField
            required
            label="Confirme sua senha"
            type="password"
            name="confirmPassword"
            placeholder="****"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          <div className="signup-fields-container-footer flex justify-end items-end flex-row py-[20px]">
            <FilledButton label="Fazer cadastro" onClick={handleSubmit} />
          </div>
        </div>
        <div className="signup-footer flex justify-between items-center flex-row py-[40px]">
          <p className=" not-italic font-light text-lg leading-6 flex items-center text-center font-raleway">
            Já possui uma conta?
          </p>
          <Link to="/login">
            <FilledButton label="Fazer login!" />
          </Link>
        </div>
      </div>
    </div>
  );
}
