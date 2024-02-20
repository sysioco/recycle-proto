import RecyclableProductTile from "@/components/scan/RecyclableProductTile";
import { Product } from "@/lib/interface";
import { addProductHistory } from "@/store/DataStore";
import useRecycleStore from "@/store/RecycleStore";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

/**
 * RecycleModal
 * @returns {JSX.Element}
 */
export default function RecycleModal(): JSX.Element {
  const { reduceProduct, products } = useRecycleStore();

  const [statusMessage, setStatusMessage] = useState("");
  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    setProductArray(products);
  }, [products]);

  const handleRecycleProduct = async (product: Product) => {
    reduceProduct(product);

    const request = await addProductHistory(product);
    if (request) {
      setStatusMessage(request?.message);
      console.log(request.message);
    }
  };

  // TODO Status MEssage Popup

  return (
    <ScrollView>
      {productArray?.map((product) => (
        <RecyclableProductTile
          key={product?.barcode}
          product={product}
          handleRecycleProduct={handleRecycleProduct}
        />
      ))}
    </ScrollView>
  );
}
