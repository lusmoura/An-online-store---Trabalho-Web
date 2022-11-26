import { useState } from "react";
import UserItem from "./UserItem";

const initialUsers = [
  {
    id: 1,
    name: "André",
    isAdmin: true,
  },
  {
    id: 2,
    name: "David",
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
  const [users, setUsers] = useState(initialUsers);

  return (
    <table className="table-fixed rounded border-2 w-2/5">
      {/* table header */}
      <thead className="border-b-2 ">
        <tr>
          <th className="p-3">Usuário</th>
          <th className="p-3">Administrador</th>
          <th className="p-3">Remover</th>
        </tr>
      </thead>

      <tbody className="w-2/5">
        {/* table body */}
        {users.map((user) => (
          <UserItem
            key={user.id}
            name={user.name}
            isAdmin={user.isAdmin}
            handleUpdate={() => {
              const updatedUsers = users.map((u) => {
                if (u.id === user.id) {
                  return {
                    ...u,
                    isAdmin: !u.isAdmin,
                  };
                }
                return u;
              });
              setUsers(updatedUsers);
            }}
            handleDelete={() => {
              setUsers(users.filter((u) => u.id !== user.id));
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
