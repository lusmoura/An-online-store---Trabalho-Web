import ItemManager from "../../../components/ItemManager/ItemManager";
import FilledButton from "../../../components/FilledButton/FilledButton";

export default function ManageItems() {
  return (
    <>
      <div className="flex gap-5 flex-col m-5 items-center">
        <h1 className="text-xl font-bold">Gerenciar items</h1>
        <ItemManager />
        <FilledButton label="Adicionar item" />
      </div>
    </>
  );
}
