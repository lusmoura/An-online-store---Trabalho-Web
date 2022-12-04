import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { fetchUsers, removeUserById, updateUser } from "../../api/user";
import UserItem from "./UserItem";

export default function UserManager({ auth }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

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
              if (auth.email === user.email) {
                return;
              }

              // update changed user
              updateUser(user).then((status) => {
                if (status === 202) {
                  toast("Usuário atualizado com sucesso!", {
                    type: "success",
                    position: "bottom-right",
                  });
                } else {
                  toast("Erro ao atualizar o usuário!", {
                    type: "error",
                    position: "bottom-right",
                  });
                }
              });
            }}
            handleDelete={() => {
              if (auth.email === user.email) {
                return;
              }

              setUsers(users.filter((u) => u.email !== user.email));

              // delete user
              removeUserById(user.email).then((status) => {
                if (status === 202) {
                  toast("Usuário removido com sucesso!", {
                    type: "success",
                    position: "bottom-right",
                  });
                } else {
                  toast("Erro ao remover o usuário!", {
                    type: "error",
                    position: "bottom-right",
                  });
                }
              });
            }}
          />
        ))}
      </tbody>
    </table>
  );
}
