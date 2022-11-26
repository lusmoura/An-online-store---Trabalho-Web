import { useParams } from "react-router-dom";
import ItemListing from "../../components/ItemListing/ItemListing";

export default function Item() {
  const { id } = useParams();
  return (
    <>
      <ItemListing id={id} isAdmin />;
    </>
  );
}
