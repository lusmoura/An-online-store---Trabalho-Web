export default function Item({ name, category }) {
  return (
    <tr className="p-5">
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="p-3">
        <p>{category}</p>
      </td>
      <td className="align-middle">
        <button className="bg-blue-500 text-white rounded-md p-1">
          Editar
        </button>
      </td>
      <td className="align-middle">
        <button className="bg-red-500 text-white rounded-md p-1">
          Remover
        </button>
      </td>
    </tr>
  );
}
