import AppHeader from "@/components/AppHeader";
import RecycleButton from "@/components/scan/RecycleButton";
import ScanAgainButton from "@/components/scan/ScanAgainButton";
import ScanBarcode from "@/components/scan/ScanBarcode";
import { icons } from "@/constants/Colors";
import { productsArr } from "@/lib/products";
import useRecycleStore from "@/store/recycleStore";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function scan() {
  const { addProduct, products, items } = useRecycleStore();

  const [scanData, setScanData] = useState<string>();
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setQuantity(items);
  }, [products]);

  // Barcode Scanner values
  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanData(data);
    addProductToRecycleState(data);
  };

  const addProductToRecycleState = (barcode: string) => {
    // Don't let product array exceed 50 items
    if (products.length < 50) {
      // check for product in products array by barcode, then add to recycle state
      productsArr.map((p) => {
        if (barcode === p.barcode) {
          addProduct(p);
        }
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          header: () => <AppHeader text="Scan Barcode" />,
        }}
      />

      <ScanBarcode
        handleBarCodeScanned={handleBarCodeScanned}
        scanData={scanData}
      />

      <View style={icons.iconsContainer}>
        <RecycleButton productCount={quantity} />
        <ScanAgainButton setScanData={setScanData} />
      </View>
    </View>
  );
}
