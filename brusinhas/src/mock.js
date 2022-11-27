import mangaCurtaBranca from "./assets/manga-curta-branca.webp";
import mangaCurtaPreta from "./assets/manga-curta-preta.jpg";
import regataVermelha from "./assets/regata-vermelha.webp";
import camisaSocial from "./assets/camisa-social.jpg";
import camisetaGato from "./assets/camiseta-gato.jpg";
import camisetaMusica from "./assets/camiseta-musica.jpg";

function addItem() {
  mock.items.push({
    id:
      mock.items.reduce((acc, item) => (item.id > acc ? item.id : acc), 0) + 1,
    name: "Camiseta manga curta branca",
    description: "Manga curta, 100% algodão, cor branca",
    src: mangaCurtaBranca,
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
      name: "Camiseta manga curta branca",
      description: "Manga curta, 100% algodão, cor branca",
      src: mangaCurtaBranca,
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
      src: mangaCurtaPreta,
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
      src: regataVermelha,
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
      src: camisaSocial,
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
      src: camisetaGato,
      alt: "Camiseta gatinho maluco",
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
      src: camisetaMusica,
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
