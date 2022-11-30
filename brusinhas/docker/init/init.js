/* eslint-disable no-undef */
db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "root", db: "admin" }],
});

db = new Mongo().getDB("db");

// create user
db.createUser({
  user: "user",
  pwd: "pass",
  roles: [{ role: "readWrite", db: "db" }],
});

// create collection users
db.createCollection("users");
db.createCollection("products");

// insert users
db.users.insertMany([
  {
    id: 0,
    name: "admin",
    email: "admin@gmail.com",
    // sha256(123)
    password:
      "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    isAdmin: true,
    address: " ",
    phone: " ",
  },
  {
    id: 1,
    name: "Thiago",
    email: "thiago@gmail.com",
    // sha256(123)
    password:
      "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    isAdmin: true,
    address: "Rua 1",
    phone: "123456789",
  },
  {
    id: 2,
    name: "Luísa",
    email: "luisa@gmail.com",
    // sha256(123)
    password:
      "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
    isAdmin: false,
    address: "Rua 1",
    phone: "123456789",
  },
]);

db.products.insertMany([
  {
    id: 1,
    name: "Camiseta manga curta branca",
    description: "Manga curta, 100% algodão, cor branca",
    alt: "Camiseta manga curta branca",
    title: "Camiseta manga curta branca",
    price: 3000,
    category: ["camiseta", "basica"],
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 4,
          },
          {
            size: "M",
            quantity: 5,
          },
          {
            size: "G",
            quantity: 7,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 6,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Camiseta manga curta preta",
    description: "Manga curta, 100% algodão, cor preta",
    alt: "Manga curta preta",
    title: "Manga curta preta",
    price: 3000,
    category: ["camiseta", "basica"],
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 6,
          },
          {
            size: "M",
            quantity: 2,
          },
          {
            size: "G",
            quantity: 15,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 4,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Regata vermelha",
    description: "Regata, fresquinha, cor vermelha",
    alt: "Regata vermelha",
    title: "Regata vermelha",
    price: 2500,
    category: "regata",
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 10,
          },
          {
            size: "M",
            quantity: 12,
          },
          {
            size: "G",
            quantity: 8,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 4,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Camisa social feminina",
    description: "Camisa social feminina, qualidade excelente, cor branca",
    alt: "Camisa social feminina",
    title: "Camisa social feminina",
    price: 7000,
    category: "social",
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 4,
          },
          {
            size: "M",
            quantity: 8,
          },
          {
            size: "G",
            quantity: 5,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Camiseta gatinho maluco",
    description: "Camiseta gatinho maluco, muito estilosa",
    title: "Camiseta gatinho maluco",
    price: 5500,
    category: "estilosah",
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 4,
          },
          {
            size: "M",
            quantity: 8,
          },
          {
            size: "G",
            quantity: 5,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 10,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Camiseta música",
    description: "Camiseta música, notas musicais, muito estilosa",
    alt: "Camiseta música",
    title: "Camiseta música",
    price: 4500,
    category: ["camiseta", "estilosah"],
    models: [
      {
        type: "Tradicional",
        sizes: [
          {
            size: "P",
            quantity: 3,
          },
          {
            size: "M",
            quantity: 2,
          },
          {
            size: "G",
            quantity: 4,
          },
        ],
      },
      {
        type: "Baby Look",
        sizes: [
          {
            size: "P",
            quantity: 5,
          },
        ],
      },
    ],
  },
]);
