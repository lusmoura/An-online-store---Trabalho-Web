import logo from "../../assets/logo.svg";
import brusinhas from "../../assets/brusinhas.svg";
import cart from "../../assets/cart_icon.svg";
import profile from "../../assets/profile_icon.svg";
import HeaderButton from "./HeaderButton";
import { Link } from "react-router-dom";

export default function Header({ isAdmin = false }) {
  return (
    <div className="header w-full h-20 flex justify-between items-center bg-pink-900 px-[10px] py-[40px]">
      <div className="header-container flex justify-between items-center w-full">
        <div className="header-left flex justify-start items-center flex-1">
          <img src={logo} alt="logo" className="mr-8" />
          <img src={brusinhas} alt="brusinhas" className="mr-8" />
          <Link to='/'>
            <HeaderButton label="Todas" />
          </Link>
          <Link to='/'>
            <HeaderButton label="Camiseta" />
          </Link>
          <Link to='/'>
          <HeaderButton label="Regata" />
          </Link>
          <Link to='/'>
          <HeaderButton label="Linha Básica" />
          </Link>
          <Link to='/'>
          <HeaderButton label="Estilosah" />
          </Link>
        </div>
        <div className="header-right w-1/5 flex justify-end">
          {isAdmin ? (
            <>
              <HeaderButton label="Gerenciar itens" />
              <HeaderButton label="Gerenciar users" />{" "}
            </>
          ) : null}
          <img src={cart} alt="cart" className="mx-[20px]" />
          <img src={profile} alt="profile" className="mx-[20px]" />
        </div>
      </div>
    </div>
  );
}
