import AppHeader from "@/components/AppHeader";
import InfoModal from "@/components/InfoModal";
import ScanBarcode from "@/components/ScanBarcode";
import ScannedBarcodeInfo from "@/components/ScannedBarcodeInfo";
import Colors from "@/constants/Colors";
import { ProductData } from "@/interfaces/ProductData";
import { Ionicons } from "@expo/vector-icons";

import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function scan() {
  const [scanSuccessful, setScanSuccessful] = useState<boolean>(false);
  const [scanData, setScanData] = useState<string>();
  const [productData, setProductData] = useState<ProductData>();

  useEffect(() => {
    if (scanData !== undefined) {
      let barcodeString = scanData;
      setProductData({
        product_barcode: barcodeString,
        product_id: "ab123",
        product_type: "can",
        product_name: "Irn Bru Extra",
      });
    }
  }, [scanData]);

  // Barcode Scanner values
  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanData(data);
    setScanSuccessful(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <AppHeader text="Scan Barcode" />,
        }}
      />
      <ScanBarcode
        handleBarCodeScanned={handleBarCodeScanned}
        scanData={scanData}
      />
      <InfoModal showModal={scanSuccessful} modalTitle="Item Scanned">
        <ScannedBarcodeInfo productInfo={productData} />
      </InfoModal>
      {/* {scanSuccessful && <ProductInfoModal scanSuccessful />} */}
    </View>
  );
}
