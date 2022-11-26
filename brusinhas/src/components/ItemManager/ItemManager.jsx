import Item from "./Item";

import { mock } from "../../mock";

import { useNavigate } from "react-router-dom";

function removeItem(id) {
  mock.items = mock.items.filter((item) => item.id !== id);
}

export default function ItemManager({ items, setItems }) {
  const navigate = useNavigate();

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
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            handleEdit={() => {
              navigate(`/item/${item.id}`);
            }}
            handleDelete={() => {
              setItems(items.filter((i) => i.id !== item.id));
              removeItem(item.id);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
