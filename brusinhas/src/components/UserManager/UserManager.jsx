import UserItem from "./UserItem";

const users = [
  {
    id: 1,
    name: "João",
    isAdmin: true,
  },
  {
    id: 2,
    name: "Maria",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Thiago",
    isAdmin: true,
  },
  {
    id: 4,
    name: "Luísa",
    isAdmin: true,
  },
];

export default function UserManager() {
  return (
    <table className="table-auto rounded border-2 ">
      {/* table header */}
      <thead className="border-b-2">
        <tr>
          <th className="p-3">Usuário</th>
          <th className="p-3">Administrador</th>
          <th className="p-3">Remover</th>
        </tr>
      </thead>

      <tbody className="w-full">
        {/* table body */}
        {users.map((user) => (
          <UserItem key={user.id} name={user.name} isAdmin={user.isAdmin} />
        ))}
      </tbody>
    </table>
  );
}
