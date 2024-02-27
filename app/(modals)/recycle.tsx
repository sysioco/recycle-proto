import RecyclableProductTile from "@/components/scan/RecyclableProductTile";
import { Product } from "@/lib/interface";
import { addProductHistory } from "@/store/DataStore";
import useRecycleStore from "@/store/RecycleStore";
import { useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

/**
 * RecycleModal
 * @returns {JSX.Element}
 */
export default function RecycleModal(): JSX.Element {
  const { reduceProduct, products } = useRecycleStore();

  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    setProductArray(products);
  }, [products]);

  const handleRecycleProduct = async (product: Product) => {
    const request = await addProductHistory(product);
    reduceProduct(product);
    if (request?.recycled === false) {
      Alert.alert(request.message);
    } else {
      Alert.alert(request.message);
    }
  };

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
