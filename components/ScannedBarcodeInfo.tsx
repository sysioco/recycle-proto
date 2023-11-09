import { ProductData } from "@/interfaces/ProductData";
import { Text, View } from "react-native";

export default function ScannedBarcodeInfo({
  productInfo,
}: {
  productInfo: ProductData;
}) {
  return (
    <View>
      <Text>{productInfo?.product_name}</Text>
    </View>
  );
}
