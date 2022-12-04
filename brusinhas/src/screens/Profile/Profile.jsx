import { useEffect } from "react";
import FilledButton from "../../components/FilledButton/FilledButton";
import TextField from "../../components/TextField/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { fetchUserById, updateUser } from "../../api/user";

function saveProfile(user) {
  // make post request to api
  updateUser(user).then((status) => {
    if (status === 202) {
      toast("Informações atualizadas com sucesso!", {
        type: "success",
        position: "bottom-center",
      });
    } else {
      toast("Erro ao atualizar informações", {
        type: "error",
        position: "bottom-center",
      });
    }
  });
}

const fetchProfile = async (email) => {
  return fetchUserById(email).then((data) => {
    return data;
  });
};

export default function Profile({ auth, setAuth }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: auth.name || "",
    email: auth.email || "",
    password: "",
    phone: auth.phone || "",
    address: auth.address || "",
    receiver: auth.receiver || "",
  });

  useEffect(() => {
    fetchProfile(auth.email).then((profile) => {
      if (!auth.loggedIn) {
        navigate("/login");
      }
      setForm(profile);
    });
  }, [auth, navigate]);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleLogout(event) {
    event.preventDefault();
    setAuth({
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      receiver: "",
      loggedIn: false,
    });

    // clear local storage
    localStorage.clear();

    navigate("/login");
  }

  function handleSubmit() {
    let isValid = true;
    if (!form.password) {
      isValid = false;
    }

    Object.keys(form).forEach((key) => {
      let value = form[key];
      if (value === "") {
        isValid = false;
        return;
      }
    });

    if (!isValid) {
      toast("Preencha todos os campos!", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }

    setAuth({
      isAdmin: auth.isAdmin,
      receiver: form.receiver,
      loggedIn: true,
      ...form,
    });

    saveProfile(form);
  }

  return (
    <div className="profile-outer mt-12 gap-12 flex justify-center items-center flex-col w-full h-full">
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
              type="text"
              placeholder="Maria da Silva"
              value={form.name}
              name="name"
              onChange={handleChange}
              required
            />
            <TextField
              label="Telefone"
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value={form.phone}
              name="phone"
              onChange={handleChange}
              required
            />
            <TextField
              label="E-mail"
              type="email"
              placeholder="xxx@xxx.xxx"
              value={form.email}
              name="email"
              onChange={handleChange}
              required
            />
            <TextField
              label="Senha"
              type="password"
              placeholder="********"
              value={form.password}
              name="password"
              onChange={handleChange}
              required
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
              required
            />
            <TextField
              label="Destinatário"
              type="text"
              name="receiver"
              placeholder="Maria da Silva"
              value={form.receiver}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <FilledButton label="Salvar" onClick={handleSubmit} />
        <FilledButton label="Fazer logout" onClick={handleLogout} />
      </div>
    </div>
  );
}
