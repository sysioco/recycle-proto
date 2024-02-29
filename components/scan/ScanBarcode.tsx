import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ScanAgainButton from "./ScanAgainButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ScanBarcode({
  handleScannedData,
  scanned,
  setScanned,
}: {
  handleScannedData: any;
  scanned: boolean;
  setScanned: any;
}): JSX.Element {
  const [hasPermissions, setHasPermissions] = useState(false);

  // Request permissions to use camera
  useEffect(() => {
    const getBarCodeScanerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    };
    getBarCodeScanerPermissions();
  }, [scanned]);

  // Barcode Scanner values
  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    handleScannedData(data);
  };

  if (!hasPermissions || hasPermissions === null) {
    return (
      <View>
        <Text>Please granted camera permissions to the application.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          style={{ height: 400, width: 400 }}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});
