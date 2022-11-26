import logo from "../../assets/logo.svg";
import brusinhas from "../../assets/brusinhas.svg";
import cart from "../../assets/cart_icon.svg";
import profile from "../../assets/profile_icon.svg";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";
import ClickableIcon from "../ClickableIcon/ClickableIcon";

export default function Header({ isAdmin = false, setCategory = () => {} }) {
  return (
    <div className="header w-full h-20 flex justify-between items-center bg-primary px-[10px] py-[40px]">
      <div className="header-container flex justify-between items-center w-full">
        <div className="header-left flex justify-start items-center flex-1">
          <Link onClick={() => setCategory("all")} to="/">
            <img src={logo} alt="logo" className="mr-8" />
          </Link>

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
        <div className="header-right w-1/5 flex justify-end">
          {isAdmin ? (
            <>
              <Link to="/admin/users">
                <HeaderButton label="Gerenciar users" />
              </Link>
              <Link to="/admin/items">
                <HeaderButton label="Gerenciar itens" />
              </Link>
            </>
          ) : null}
          <div className="flex gap-4 mx-[20px]">
            <Link to="/cart">
              <ClickableIcon src={cart} alt="cart" className="mx-[20px]" />
            </Link>
            <Link to="/profile">
              <ClickableIcon
                src={profile}
                alt="profile"
                className="mx-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
