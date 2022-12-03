import brusinhas from "../../assets/brusinhas.svg";
import cart from "../../assets/cart_icon.svg";
import profile from "../../assets/profile_icon.svg";
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
    <div className="header h-20 w-full flex justify-between items-center bg-primary px-[10px] py-[40px]">
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
            <Link to="/cart">
              <div className="">
              {isLoggedIn && !isAdmin && (
                <div className="bg-white w-[20px] h-[20px] rounded-full flex flex-center justify-center items-center">
                <div className="font-light h-full w-full text-center flex flex-center items-center justify-center">
                  {itemCount}
                </div>
                </div>
              )}
              <ClickableIcon src={cart} alt="cart" className="mx-[20px]" />
              </div>
            </Link>
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

          {isLoggedIn && (
            <div className="flex gap-4 mx-[20px]">
              <Link to="/profile">
                <ClickableIcon
                  src={profile}
                  alt="profile"
                  className="mx-[20px]"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
