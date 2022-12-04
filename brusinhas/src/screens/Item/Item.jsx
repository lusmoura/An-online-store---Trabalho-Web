import { useParams } from "react-router-dom";
import ItemListing from "../../components/ItemListing/ItemListing";

export default function Item({ auth, addToCart }) {
  const { id } = useParams();
  return (
    <div className="flex flex-col">
      <ItemListing id={id} auth={auth} addToCart={addToCart} />
    </div>
  );
}
