import Item from "./Item";

const items = [
  {
    id: 1,
    name: "Camiseta manga curta",
    category: "Camiseta",
  },
  {
    id: 2,
    name: "Camiseta manga longa",
    category: "Camiseta",
  },
];

export default function ItemManager() {
  return (
    <table className="table-auto rounded border-2 w-2/5">
      {/* table header */}
      <thead className="border-b-2">
        <tr>
          <th className="p-3">Nome</th>
          <th className="p-3">Tipo</th>
          <th className="p-3">Editar</th>
          <th className="p-3">Remover</th>
        </tr>
      </thead>

      <tbody className="w-full">
        {/* table body */}
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </tbody>
    </table>
  );
}
