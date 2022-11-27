import ClickableIcon from "../ClickableIcon/ClickableIcon";
import pencilIcon from "../../assets/pencil.svg";
import trashBinIcon from "../../assets/trash-bin.svg";
export default function Item({
  name,
  category,
  handleEdit = () => {},
  handleDelete = () => {},
}) {
  return (
    <tr className="p-5">
      <td className="p-3 text-center">
        <p>{name}</p>
      </td>
      <td className="p-3 text-center">
        {Array.isArray(category) ? (
          <p>{category.join(", ")}</p>
        ) : (
          <p>{category}</p>
        )}
      </td>
      <td className="p-3 text-center">
        <ClickableIcon
          src={pencilIcon}
          alt="pencil icon"
          onClick={handleEdit}
        />
      </td>
      <td className="p-3 text-center">
        <ClickableIcon
          src={trashBinIcon}
          alt="trash bin icon"
          onClick={handleDelete}
        />
      </td>
    </tr>
  );
}
