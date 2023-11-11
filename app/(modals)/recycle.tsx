import RecyclableProductTile from "@/components/scan/RecyclableProductTile";
import { Product } from "@/lib/interface";
import { productsArr } from "@/lib/products";
import useDataStore from "@/store/dataStore";
import useRecycleStore from "@/store/recycleStore";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

/**
 * RecycleModal
 * @returns {JSX.Element}
 */
export default function RecycleModal(): JSX.Element {
  const { reduceProduct, products } = useRecycleStore();
  const { addData, data } = useDataStore();

  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    setProductArray(products);
  }, [products]);

  const handleRecycleProduct = (product: Product) => {
    reduceProduct(product);
    addData(product);
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
