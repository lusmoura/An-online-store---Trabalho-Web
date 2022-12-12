const brusinhas = "/assets/brusinhas.svg";
const cart = "/assets/cart_icon.svg";
const profile = "/assets/profile_icon.svg";

import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import ClickableIcon from "../ClickableIcon/ClickableIcon";

export default function Header({
  isLoggedIn = false,
  isAdmin = false,
  setCategory = () => {},
  itemCount = 0,
}) {
  return (
    <div className="header h-24 w-full flex justify-between items-center bg-primary px-[10px] py-[40px]">
      <div className="header-container w-full flex items-center">
        <div className="header-left flex items-center justify-start">
          <Link onClick={() => setCategory("all")} to="/">
            <img src={brusinhas} alt="brusinhas" className="mr-8" />
          </Link>
          <Link to="/">
            <HeaderButton label="Todas" onClick={() => setCategory("all")} />
          </Link>
          <Link to="/">
            <HeaderButton
              label="Camiseta"
              onClick={() => setCategory("camiseta")}
            />
          </Link>
          <HeaderButton label="Regata" onClick={() => setCategory("regata")} />
          <Link to="/">
            <HeaderButton
              label="Linha Básica"
              onClick={() => setCategory("basica")}
            />
          </Link>
          <Link to="/">
            <HeaderButton
              label="Estilosah"
              onClick={() => setCategory("estilosah")}
            />
          </Link>
        </div>
        <div className="header-right ml-auto flex items-center">
          {isLoggedIn && isAdmin && (
            <>
              <Link to="/admin/users">
                <HeaderButton label="Gerenciar users" />
              </Link>
              <Link to="/admin/items">
                <HeaderButton label="Gerenciar itens" />
              </Link>
            </>
          )}
          <div className="flex gap-6 justify-center items-center">
            {!isLoggedIn && (
              <div className="flex">
                <Link to="/login">
                  <HeaderButton label="Fazer login" />
                </Link>
                <Link to="/signup">
                  <HeaderButton label="Cadastrar-se" />
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center align-top">
            <Link to="/cart">
              <div>
                <div className="bg-white rounded-full font-light h-full -ml-3 -mt-[20px] text-center w-full">
                  {itemCount}
                </div>

                <ClickableIcon src={cart} alt="cart" />
              </div>
            </Link>

            {isLoggedIn && (
              <div className="flex gap-4 mx-6">
                <Link to="/profile">
                  <ClickableIcon src={profile} alt="profile" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
