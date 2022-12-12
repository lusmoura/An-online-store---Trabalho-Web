import ClickableIcon from "../ClickableIcon/ClickableIcon";

const trashBinIcon = "/assets/trash-bin.svg";
const onIcon = "/assets/toggle-fill.svg";
const offIcon = "/assets/toggle-line.svg";

import { useState } from "react";
import { toast } from "react-toastify";

export default function UserItem({
  auth,
  email,
  isAdmin = false,
  handleUpdate = () => {},
  handleDelete = () => {},
}) {
  const [icon, setIcon] = useState(isAdmin ? onIcon : offIcon);
  return (
    <tr className="p-5">
      <td className="p-3 text-center">
        <p>{email}</p>
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
          onClick={() => {
            if (auth.email === email) {
              toast("Você não pode alterar seu próprio status", {
                type: "warning",
                position: "bottom-center",
              });
              return;
            }

            handleDelete();
          }}
        />
      </td>
    </tr>
  );
}
