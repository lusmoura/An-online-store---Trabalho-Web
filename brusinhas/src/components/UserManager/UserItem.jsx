import ClickableIcon from "../ClickableIcon/ClickableIcon";

import trashBinIcon from "../../assets/trash-bin.svg";
import onIcon from "../../assets/toggle-fill.svg";
import offIcon from "../../assets/toggle-line.svg";
import { useState } from "react";
import { toast } from "react-toastify";

export default function UserItem({
  name,
  email,
  auth,
  isAdmin = false,
  handleUpdate = () => {},
  handleDelete = () => {},
}) {
  const [icon, setIcon] = useState(isAdmin ? onIcon : offIcon);

  console.log(email, auth.email);
  return (
    <tr className="p-5">
      <td className="p-3 text-center">
        <p>{name}</p>
      </td>
      <td className="align-middle text-center">
        <ClickableIcon
          src={icon}
          alt={"toggle icon"}
          onClick={() => {
            if (auth.email === email) {
              toast("Você não pode alterar seu próprio status", {
                type: "warning",
                position: "bottom-center",
              });

              return;
            }
            setIcon(icon === onIcon ? offIcon : onIcon);
            handleUpdate();
          }}
        />
      </td>
      <td className="align-middle text-center">
        <ClickableIcon
          src={trashBinIcon}
          alt="trash bin icon"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
}
