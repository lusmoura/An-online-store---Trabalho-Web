import API_PORT from "./env";

export const fetchUsers = async () => {
  const response = await fetch(`http://localhost:${API_PORT}/user`);
  const data = await response.json();
  return data;
};

export const login = async (email, password) => {
  const response = await fetch(
    `http://localhost:${API_PORT}/user/login/${email}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ password: password }),
    }
  );

  if (response.status === 200) {
    return await response.json();
  }

  return null;
};

export const fetchUserById = async (email) => {
  const response = await fetch(`http://localhost:${API_PORT}/user/${email}`);

  if (response.status === 200) {
    return await response.json();
  }

  return null;
};

export const createUser = async (user) => {
  const response = await fetch(`http://localhost:${API_PORT}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.status;
};

export const updateUser = async (user) => {
  const response = await fetch(
    `http://localhost:${API_PORT}/user/${user.email}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return response.status;
};

export const removeUserById = async (email) => {
  const response = await fetch(`http://localhost:${API_PORT}/user/${email}`, {
    method: "DELETE",
  });

  return response.status;
};
