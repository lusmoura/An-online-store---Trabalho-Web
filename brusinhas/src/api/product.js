import API_PORT from "./env";

export const fetchProducts = async () => {
  const response = await fetch(`http://localhost:${API_PORT}/product`);
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id) => {
  const response = await fetch(`http://localhost:${API_PORT}/product/${id}`);
  const data = await response.json();
  return data;
};

export const updateProduct = async (product) => {
  product.src = product.src || "manga-curta-branca.webp"; // hard coded since are not storing image files in database
  const response = await fetch(
    `http://localhost:${API_PORT}/product/${product.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }
  );
  const data = await response.json();
  return data;
};

export const removeProductById = async (id) => {
  const response = await fetch(`http://localhost:${API_PORT}/product/${id}`, {
    method: "DELETE",
  });

  return response.status;
};

export const createProduct = async (product) => {
  product.src = "manga-curta-branca.webp"; // hard coded since are not storing image files in database
  const response = await fetch(`http://localhost:${API_PORT}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  return response.status;
};
