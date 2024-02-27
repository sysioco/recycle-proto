import AppHeader from "@/components/AppHeader";
import ActiveBinButton from "@/components/scan/ActiveBinButton";
import RecycleButton from "@/components/scan/RecycleButton";
import ScanBarcode from "@/components/scan/ScanBarcode";
import { icons } from "@/constants/Colors";
import { binsArr } from "@/lib/bins";
import { productsArr } from "@/lib/products";
import useRecycleStore from "@/store/RecycleStore";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

export default function scan() {
  const { addProduct, products, items } = useRecycleStore();
  const [binActive, setBinActive] = useState(true);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    setQuantity(items);
  }, [products]);

  const binCheck = () => {
    if (!binActive) {
      return Alert.alert("Please scan a bin to begin recycling.");
    }
  };

  const handleScannedData = (data: string) => {
    // Find the matching item in either array
    const productMatch = productsArr.find((item) => item.barcode === data);
    const binMatch = binsArr.find((item) => item.barcode === data);

    // pass onto correct process function
    if (binMatch) {
      activeBinForRecycling(binMatch);
    } else if (productMatch) {
      binCheck(); // ensure bin is active
      addProductToRecycleState(productMatch);
    }
  };

  const addProductToRecycleState = (product: any) => {
    console.log("addProductToRecycleState", product);
    // Don't let product array exceed 50 items
    if (products.length < 50) {
      // check for product in products array by barcode, then add to recycle state
      addProduct(product);
    }
  };

  const activeBinForRecycling = (bin: any) => {
    console.log("activeBinForRecycling", bin);
    setBinActive(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          header: () => <AppHeader text="Scan Barcode" />,
        }}
      />

      <ScanBarcode handleScannedData={handleScannedData} />

      <View style={icons.iconsContainer}>
        {binActive && <RecycleButton productCount={quantity} />}

        {/* <ScanAgainButton setScanData={setScanData} /> */}
        <ActiveBinButton binActive={binActive} setBinActive={setBinActive} />
      </View>
    </View>
  );
}
