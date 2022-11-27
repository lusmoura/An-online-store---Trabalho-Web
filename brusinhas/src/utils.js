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

function isPositiveInteger(str) {
  if (typeof str !== "string") {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }

  return false;
}

export { possibleSizes, colors, centsToReal, isPositiveInteger };
