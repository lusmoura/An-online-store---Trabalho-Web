import { useEffect } from "react";
import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Profile({auth, users, setUsers, setAuth}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: auth.name,
    email: auth.email,
    password: auth.password,
    phone: auth.phone,
    address: auth.address,
    receiver: auth.receiver,
  });

  useEffect(() => {
    if (auth.email === "") {
      navigate("/login");
    }
  }, []);

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
        alert("Preencha todos os campos");
        return;
      }
    }

    setAuth({
      isAdmin: false,
      receiver: form.name,
      ...form,
    });

    setUsers(() => {
      const user = users.find((user) => user.email === form.email);
      const index = users.indexOf(user);
      users[index] = form;
      return users;
    });
  }

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
              value={form.name}
              name="name"
              onChange={handleChange}
            />
            <TextField
              label="Telefone"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value={form.phone}
              name="phone"
              onChange={handleChange}
            />
            <TextField
              label="E-mail"
              type="email"
              placeholder="xxx@xxx.xxx"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
            <TextField
              label="Senha"
              type="password"
              placeholder="********"
              value={form.password}
              name="password"
              onChange={handleChange}
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
              label="Endereço"
              type="text"
              placeholder="Rua das Flores, 123"
              value={form.address}
              name="address"
              onChange={handleChange}
            />
            <TextField
              label="Destinatário"
              type="text"
              name="receiver"
              placeholder="Maria da Silva"
              value={form.receiver}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <FilledButton label="Salvar" onClick={handleSubmit} />
    </div>
  );
}
