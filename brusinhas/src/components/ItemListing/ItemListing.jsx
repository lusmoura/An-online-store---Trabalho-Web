import FilledButton from "../FilledButton/FilledButton";

const editIcon = "/assets/pencil.svg";

import ClickableIcon from "../ClickableIcon/ClickableIcon";
import { useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { centsToReal, isPositiveInteger, possibleSizes } from "../../utils";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

import { fetchProductById, updateProduct } from "../../api/product";

function updateItem(product) {
  // make put request to overwrite product
  updateProduct(product)
    .then(() => {
      toast.success("Produto atualizado com sucesso!", {
        position: "bottom-right",
      });
    })
    .catch((err) => {
      toast.error("Erro ao atualizar produto.", { position: "bottom-right" });
      console.error(err);
    });
}

export default function ItemListing({ id, auth, addToCart }) {
  const [fetchedItem, setItem] = useState({});
  const [selectedModel, setSelectedModel] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [maxCount, setMaxCount] = useState(0);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const [count, setCount] = useState(1);

  let isAdmin = auth.isAdmin;

  // startup
  useEffect(() => {
    // fetch item from api
    fetchProductById(id).then((item) => {
      setItem(item);

      // set default model
      const defaultModel = item.models[0];
      const defaultSize = defaultModel.sizes[0];

      setSelectedModel(defaultModel);
      setSelectedSize(defaultSize.size);

      // set item name, desc and price
      setName(item.name);
      setDesc(item.description);
      setPrice(item.price);

      // set max count to size of the item
      const fetchedModel = item.models.find((model) => model === defaultModel);

      if (!fetchedModel) return;

      const fetchedSize = fetchedModel.sizes.find(
        (size) => size.size === defaultSize.size
      );

      if (!fetchedSize || fetchedSize.quantity === 0) {
        setCount(0);
        setMaxCount(0);
        return;
      }

      setMaxCount(fetchedSize.quantity);

      if (isAdmin) {
        setCount(fetchedSize.quantity);
      } else {
        setCount(1);
      }
    });
  }, [id, isAdmin]);

  // update item values when model/size changes
  useEffect(() => {
    // return if item has not been fetched yet
    if (Object.keys(fetchedItem).length === 0) return;

    // update counts when model or size changes
    const fetchedModel = fetchedItem.models.find(
      (model) => model === selectedModel
    );

    if (!fetchedModel) return;

    const fetchedSize = fetchedModel.sizes.find(
      (size) => size.size === selectedSize
    );

    if (!fetchedSize || fetchedSize.quantity === 0) {
      setCount(0);
      setMaxCount(0);
      return;
    }

    setMaxCount(fetchedSize.quantity);

    if (isAdmin) {
      setCount(fetchedSize.quantity);
    } else {
      setCount(1);
    }
  }, [fetchedItem, selectedModel, selectedSize, isAdmin]);

  // when count changes, update stock
  const handleAdminUpdateCount = (newCount) => {
    // return if item has not been fetched yet
    if (Object.keys(fetchedItem).length === 0) return;

    // if count didnt change, return
    if (newCount === count) return;

    // update item when count changes
    const fetchedModelIdx = fetchedItem.models.findIndex(
      (model) => model === selectedModel
    );

    if (fetchedModelIdx === -1) return;

    const fetchedSizeIdx = fetchedItem.models[fetchedModelIdx].sizes.findIndex(
      (size) => size.size === selectedSize
    );

    // if size does not exist, create it
    if (fetchedSizeIdx === -1) {
      fetchedItem.models[fetchedModelIdx].sizes.push({
        size: selectedSize,
        quantity: newCount,
      });
    } else {
      // otherwise update it
      fetchedItem.models[fetchedModelIdx].sizes[fetchedSizeIdx].quantity =
        newCount;
    }

    setCount(newCount);
    // if count is 0, remove size from model
    if (newCount === 0) {
      fetchedItem.models[fetchedModelIdx].sizes.splice(fetchedSizeIdx, 1);
    }

    updateItem(fetchedItem);
  };

  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (count === 0) {
      if (maxCount === 0) {
        toast("Produto indisponível nesse tamanho!", {
          type: "warning",
          position: "bottom-center",
        });
      } else {
        toast("Selecione uma quantidade!", {
          type: "warning",
          position: "bottom-center",
        });
      }

      return;
    }

    toast("Item adicionado ao carrinho", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
    });
    addToCart(fetchedItem.id, selectedModel.type, selectedSize, count);
  };

  const nameRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);

  if (fetchedItem.id === undefined) {
    return (
      <h1 className="flex flex-row justify-center items-center gap-16">
        Carregando...
      </h1>
    );
  }

  return (
    <div className="flex flex-row justify-center items-center gap-16">
      <img
        className="object-contain w-96"
        src={`/assets/${fetchedItem.src}`}
        alt={fetchedItem.alt}
      />
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-1">
            {isAdmin ? (
              <input
                type="textarea"
                ref={nameRef}
                className="text-xl font-bold"
                onChange={(el) => {
                  setName(el.target.value);
                }}
                onBlur={() => {
                  fetchedItem.name = name;
                  updateItem(fetchedItem);
                }}
                value={name}
              />
            ) : (
              <p className="text-xl font-bold">{fetchedItem.name}</p>
            )}

            {isAdmin && (
              <ClickableIcon
                src={editIcon}
                alt="pencil icon"
                onClick={() => {
                  nameRef.current.focus();
                }}
              />
            )}
          </div>
          <div className="flex items-center gap-1">
            {isAdmin ? (
              <input
                type="textarea"
                ref={descRef}
                className="text-lg font-light w-auto"
                onChange={(el) => {
                  setDesc(el.target.value);
                }}
                onBlur={() => {
                  fetchedItem.description = desc;
                  updateItem(fetchedItem);
                }}
                value={desc}
              />
            ) : (
              <p className="text-lg font-light w-auto">
                {fetchedItem.description}
              </p>
            )}

            {isAdmin && (
              <ClickableIcon
                src={editIcon}
                alt="pencil icon"
                onClick={() => {
                  descRef.current.focus();
                }}
              />
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {isAdmin ? (
            <input
              type="textarea"
              ref={priceRef}
              className="text-lg font-bold w-auto"
              onChange={(el) => {
                if (isPositiveInteger(el.target.value)) {
                  setPrice(el.target.value);
                }
              }}
              onBlur={() => {
                fetchedItem.price = price;
                updateItem(fetchedItem);
              }}
              value={price}
            />
          ) : (
            <p className="text-lg font-bold w-auto">
              {centsToReal(fetchedItem.price)}
            </p>
          )}

          {isAdmin && (
            <ClickableIcon
              src={editIcon}
              alt="pencil icon"
              onClick={() => {
                priceRef.current.focus();
              }}
            />
          )}
        </div>
        <div>
          <h3 className="m-1">Modelagem</h3>
          <div className="flex flex-row gap-2">
            {fetchedItem.models.map((model, idx) => (
              <button
                key={idx}
                className={`font-light rounded p-3 ${
                  selectedModel == model ? "bg-gray-400" : " bg-gray-200"
                }`}
                onClick={() => {
                  setSelectedModel(model);
                  setSelectedSize(model.sizes[0].size);
                  setCount(model.sizes[0].quantity);
                }}
              >
                {model.type}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="m-1">Tamanho</h3>
          <div className="flex flex-row gap-2 flex-grow">
            {possibleSizes.map((possibleSize) => {
              {
                const foundSize = selectedModel.sizes.find(
                  (modelSizes) => modelSizes.size === possibleSize
                );

                const disabled = !foundSize || foundSize.quantity === 0;
                let color = "bg-gray-200";

                if (disabled) {
                  color = "bg-red-200";
                  if (selectedSize === possibleSize) {
                    color = "bg-red-400";
                  }
                } else if (selectedSize === possibleSize) {
                  color = "bg-gray-400";
                }

                return (
                  <button
                    key={possibleSize}
                    className={`${color} min-w-[50px] min-h-[50px] font-light rounded-full p-3`}
                    onClick={() => {
                      setSelectedSize(possibleSize);
                      setMaxCount(disabled ? 0 : foundSize.quantity);
                    }}
                  >
                    {possibleSize}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div>
          <h3 className="m-1">Quantidade</h3>
          <div className="flex flex-center items-center">
            <ItemCounter
              count={count}
              handleDecrease={() => {
                if (isAdmin) {
                  handleAdminUpdateCount(Math.max(0, count - 1));
                  return;
                }

                const fetchedModel = fetchedItem.models.find(
                  (model) => model === selectedModel
                );

                if (!fetchedModel) return;

                const fetchedSize = fetchedModel.sizes.find(
                  (size) => size.size === selectedSize
                );

                if (!fetchedSize || fetchedSize.quantity === 0) return;

                setCount(Math.max(1, count - 1));
              }}
              handleIncrease={() => {
                if (isAdmin) {
                  handleAdminUpdateCount(Math.min(100, count + 1));
                  return;
                }

                const fetchedModel = fetchedItem.models.find(
                  (model) => model === selectedModel
                );

                if (!fetchedModel) return;

                const fetchedSize = fetchedModel.sizes.find(
                  (size) => size.size === selectedSize
                );

                if (!fetchedSize || fetchedSize.quantity === 0) return;

                setCount(Math.min(fetchedSize.quantity, count + 1));
                setMaxCount(fetchedSize.quantity);
              }}
            />
            {!isAdmin && (
              <div className="ml-5">
                <p>{`Estoque: ${maxCount}`}</p>
              </div>
            )}
          </div>
        </div>
        {!isAdmin && (
          <div className="flex gap-3">
            <FilledButton
              label="Comprar agora"
              onClick={() => {
                handleAddToCart();
                if (count > 0) {
                  navigate("/checkout");
                }
              }}
            />
            <FilledButton
              onClick={handleAddToCart}
              label="Adicionar ao carrinho"
            />
          </div>
        )}
      </div>
    </div>
  );
}
