import Item from "./Item";

import { useNavigate } from "react-router-dom";
import { removeProductById } from "../../api/product";
import { toast } from "react-toastify";

function removeProduct(id) {
  // make delete request to api
  removeProductById(id).then((status) => {
    if (status === 202) {
      toast("Item removido com sucesso!", {
        type: "success",
        position: "bottom-right",
      });
    } else {
      toast("Erro ao remover o item!", {
        type: "error",
        position: "bottom-right",
      });
    }
  });
}

export default function ItemManager({ items, setItems }) {
  const navigate = useNavigate();

  if (!items) {
    return (
      <h1 className="flex justify-center items-center">
        Nenhum item encontrado
      </h1>
    );
  }

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
              removeProduct(item.id);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
