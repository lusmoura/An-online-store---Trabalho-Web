import logo from "../../assets/logo.svg";
import brusinhas from "../../assets/brusinhas.svg";
import cart from "../../assets/cart_icon.svg";
import profile from "../../assets/profile_icon.svg";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <div className="header w-full h-20 flex justify-between items-center bg-pink-900 px-[10px] py-[40px]">
      <div className="header-container flex justify-between items-center w-full">
        <div className="header-left flex justify-start items-center flex-1">
          <img src={logo} alt="logo" className="mr-8" />
          <img src={brusinhas} alt="brusinhas" className="mr-8" />
          <HeaderButton label="Todas" />
          <HeaderButton label="Camiseta" />
          <HeaderButton label="Regata" />
          <HeaderButton label="Linha Básica" />
          <HeaderButton label="Estilosah" />
        </div>
        <div className="header-right w-1/5 flex justify-end">
          <img src={cart} alt="cart" className="ml-8" />
          <img src={profile} alt="profile" className="ml-8" />
        </div>
      </div>
    </div>
  );
}
