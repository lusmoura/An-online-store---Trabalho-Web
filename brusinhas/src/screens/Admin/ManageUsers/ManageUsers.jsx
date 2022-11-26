import UserManager from "../../../components/UserManager/UserManager";

export default function ManageUsers() {
  return (
    <>
      <div className="flex gap-5 flex-col m-5 items-center">
        <h1 className="text-xl font-bold">Gerenciar usuários</h1>
        <UserManager />
      </div>
    </>
  );
}
