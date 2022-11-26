import ItemManager from "../../../components/ItemManager/ItemManager";
import FilledButton from "../../../components/FilledButton/FilledButton";
import { addItem, mock } from "../../../mock";

import { useState } from "react";
export default function ManageItems() {
  const [items, setItems] = useState(mock.items);

  return (
    <>
      <div className="flex gap-5 flex-col m-5 items-center">
        <h1 className="text-xl font-bold">Gerenciar items</h1>
        <ItemManager items={items} setItems={setItems} />
        <FilledButton
          label="Adicionar item"
          onClick={() => {
            setItems([...items, addItem()]);
          }}
        />
      </div>
    </>
  );
}
