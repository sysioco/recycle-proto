import RecyclableProductTile from "@/components/scan/RecyclableProductTile";
import { Product } from "@/lib/interface";
import { products } from "@/lib/products";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

/**
 * RecycleModal
 * @returns {JSX.Element}
 */
export default function RecycleModal(): JSX.Element {
  const [productArray, setProductArray] = useState<Product[]>([]);

  useEffect(() => {
    console.log("RecycleModal");

    if (products.length > 0) {
      setProductArray(products);
    }
  }, []);

  return (
    <ScrollView>
      {productArray?.map((product) => (
        <RecyclableProductTile key={product?.barcode} product={product} />
      ))}
    </ScrollView>
  );
}
