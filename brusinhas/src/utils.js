const possibleSizes = ["P", "M", "G", "GG", "XG", "XGG"];

const colors = {
  primary: "#820065",
};

const centsToReal = (cents) => {
  return (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export { possibleSizes, colors, centsToReal };
