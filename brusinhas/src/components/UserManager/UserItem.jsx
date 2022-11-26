import ClickableIcon from "../ClickableIcon/ClickableIcon";

import trashBinIcon from "../../assets/trash-bin.svg";
import onIcon from "../../assets/toggle-fill.svg";
import offIcon from "../../assets/toggle-line.svg";
import { useState } from "react";

export default function UserItem({
  name,
  isAdmin = false,
  handleUpdate = () => {},
  handleDelete = () => {},
}) {
  const [icon, setIcon] = useState(isAdmin ? onIcon : offIcon);

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
