import ClickableIcon from "../ClickableIcon/ClickableIcon";
import Switch from "../Switch/Switch";

import trashBinIcon from "../../assets/trash-bin.svg";

export default function UserItem({
  name,
  isAdmin,
  handleUpdate = () => {},
  handleDelete = () => {},
}) {
  return (
    <tr className="p-5">
      <td className="p-3 text-center">
        <p>{name}</p>
      </td>
      <td className="align-middle text-center">
        <Switch toggled={isAdmin} onClick={handleUpdate} />
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
