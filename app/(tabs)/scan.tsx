import AppHeader from "@/components/AppHeader";
import RecycleButton from "@/components/scan/RecycleButton";
import ScanBarcode from "@/components/scan/ScanBarcode";

import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

interface ScanProps {
  data: string;
}

export default function scan() {
  const [scanData, setScanData] = useState<string>();

  // Barcode Scanner values
  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanData(data);
    console.log(type, data);
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
        setScanData={setScanData}
      />

      <RecycleButton productCount={99} />
    </View>
  );
}
