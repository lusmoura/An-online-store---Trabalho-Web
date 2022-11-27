import { useState } from "react";
import UserItem from "./UserItem";
import { mock, removeUser, updateUserAdmin } from "../../mock";

export default function UserManager({ auth }) {
  const [users, setUsers] = useState(mock.users);

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
            email={user.email}
            auth={auth}
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
              updateUserAdmin(user.id, !user.isAdmin);
            }}
            handleDelete={() => {
              setUsers(users.filter((u) => u.id !== user.id));
              removeUser(user.id);
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
