export default function UserItem({ name, isAdmin }) {
  return (
    <tr className="p-5">
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="align-middle">
        <label className="switch">
          <input name="switch" type="checkbox" checked={isAdmin} />
        </label>
      </td>
      <td className="align-middle">
        <button className="bg-red-500 text-white rounded-md p-1">
          Remover
        </button>
      </td>
    </tr>
  );
}
