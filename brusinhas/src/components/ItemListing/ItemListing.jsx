import FilledButton from "../FilledButton/FilledButton";

import editIcon from "../../assets/pencil.svg";
import ClickableIcon from "../ClickableIcon/ClickableIcon";
import { useNavigate } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import { mock } from "../../mock";
import { centsToReal, isPositiveInteger, possibleSizes } from "../../utils";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

function fetchItem(id) {
  return mock.items.find((item) => String(item.id) === id);
}

function updateItem(id, selectedModel, selectedSize, newCount) {
  // update item in mocks array
  const item = mock.items.find((item) => String(item.id) === id);
  const foundModel = item.models.find((model) => model === selectedModel);

  if (foundModel) {
    let foundSize = foundModel.sizes.find((size) => size.size === selectedSize);

    if (foundSize) {
      foundSize.quantity = newCount;
    } else {
      foundModel.sizes.push({ size: selectedSize, quantity: newCount });
    }
  } else {
    item.models.push({
      model: selectedModel,
      sizes: [{ size: selectedSize, quantity: newCount }],
    });
  }
}

function updateItemMetadata(id, name, price, description) {
  let idx = mock.items.findIndex((item) => String(item.id) === id);
  mock.items[idx].name = name;
  mock.items[idx].price = price;
  mock.items[idx].description = description;
}

export default function ItemListing({ id, auth, addToCart }) {
  const navigate = useNavigate();
  let [fetchedItem, setItem] = useState(fetchItem(id));

  const [name, setName] = useState(fetchedItem.name);
  const [desc, setDesc] = useState(fetchedItem.description);
  const [price, setPrice] = useState(fetchedItem.price);

  const [selectedModel, setSelectedModel] = useState(fetchedItem.models[0]);
  const [selectedSize, setSelectedSize] = useState(selectedModel.sizes[0].size);
  const [count, setCount] = useState(1);

  let isAdmin = auth.isAdmin;

  const handleAddToCart = () => {
    if (count == 0) {
      toast("Selecione uma quantidade!", {
        type: "warning",
        position: "bottom-center",
      });
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

  useEffect(() => {
    setItem(fetchItem(id));
  }, [id]);

  useEffect(() => {
    const foundModel = fetchedItem.models.find(
      (model) => model === selectedModel
    );

    if (foundModel) {
      const foundSize = foundModel.sizes.find(
        (size) => size.size === selectedSize
      );

      if (foundSize) {
        setCount(1);
      } else {
        setCount(0);
      }
    }
  }, [fetchedItem, selectedModel, selectedSize]);

  const nameRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);

  return (
    <div className="flex flex-row justify-center items-center gap-16">
      <img
        className="object-contain w-96"
        src={fetchedItem.src}
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
                  updateItemMetadata(id, name, price, desc);
                }}
                onBlur={() => {
                  updateItemMetadata(id, name, price, desc);
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
                  updateItemMetadata(id, name, price, desc);
                }}
                onBlur={() => {
                  updateItemMetadata(id, name, price, desc);
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
                  updateItemMetadata(id, name, price, desc);
                }
              }}
              onBlur={() => {
                updateItemMetadata(id, name, price, desc);
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

                      if (isAdmin) {
                        updateItem(id, selectedModel, selectedSize, count);
                      }
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
          <ItemCounter
            count={count}
            handleDecrease={() => {
              if (isAdmin) {
                setCount(Math.max(0, count - 1));
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
                setCount(Math.min(100, count + 1));
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
            }}
          />
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
