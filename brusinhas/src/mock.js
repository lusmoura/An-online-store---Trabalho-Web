import tshirt from "./assets/t-shirt.png";

function addItem() {
  mock.items.push({
    id: mock.items.length + 1,
    name: "Camiseta manga curta",
    description: "Camiseta manga curta, 100% algodão, cor branca",
    src: tshirt,
    alt: "T-shirt",
    title: "T-shirt 1",
    price: 5000,
    category: "camiseta",
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
  });

  return mock.items[mock.items.length - 1];
}

function removeItem(id) {
  const index = mock.items.findIndex((item) => item.id === id);
  mock.items.splice(index, 1);
}

function removeUser(id) {
  const index = mock.users.findIndex((user) => user.id === id);
  mock.users.splice(index, 1);
}

function updateUserAdmin(id, admin) {
  const index = mock.users.findIndex((user) => user.id === id);
  mock.users[index].isAdmin = admin;
}

var mock = {
  items: [
    {
      id: 1,
      name: "Camiseta manga curta",
      description: "Camiseta manga curta, 100% algodão, cor branca",
      src: tshirt,
      alt: "T-shirt",
      title: "T-shirt 1",
      price: 5000,
      category: "camiseta",
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
      name: "Camiseta manga curta",
      description: "Camiseta manga curta, 100% algodão, cor branca",
      src: tshirt,
      alt: "T-shirt",
      title: "T-shirt 2",
      price: 5000,
      category: "camiseta",
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
      id: 3,
      name: "Camiseta manga curta",
      description: "Camiseta manga curta, 100% algodão, cor branca",
      src: tshirt,
      alt: "T-shirt",
      title: "T-shirt 3",
      price: 5000,
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
  ],

  users: [
    {
      id: 0,
      name: "admin",
      email: "admin@gmail.com",
      password: "admin",
      isAdmin: true,
      address: " ",
      phone: " ",
    },
    {
      id: 1,
      name: "Thiago",
      email: "thiago@gmail.com",
      password: "123456",
      isAdmin: true,
      address: "Rua 1",
      phone: "123456789",
    },
    {
      id: 2,
      name: "Luísa",
      email: "luisa@gmail.com",
      password: "123456",
      isAdmin: false,
      address: "Rua 1",
      phone: "123456789",
    },
  ],
};

export { mock, addItem, removeItem, removeUser, updateUserAdmin };
