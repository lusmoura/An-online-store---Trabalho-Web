import { useState } from "react";
import onIcon from "../../assets/toggle-fill.svg";
import offIcon from "../../assets/toggle-line.svg";

export default function Switch(toggled = false, onClick = () => {}) {
  const [isOn, setIsOn] = useState(toggled);
  const [icon, setIcon] = useState(isOn ? onIcon : offIcon);
  console.log(typeof onClick);
  return (
    <button
      onClick={() => {
        setIcon(isOn ? offIcon : onIcon);
        setIsOn(!isOn);
        onClick();
      }}
    >
      <img src={icon} alt="switch icon" />
    </button>
  );
}
