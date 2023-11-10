import { theme } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ScanBarcode({
  handleBarCodeScanned,
  scanData,
  setScanData,
}: {
  handleBarCodeScanned: any;
  scanData: string | undefined;
  setScanData: any;
}) {
  const [hasPermissions, setHasPermissions] = useState(false);

  // Request permissions to use camera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  }, []);

  if (!hasPermissions) {
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
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      </View>
      <ScanAgainButton setScanData={setScanData} />
      <Text>{scanData}</Text>
    </View>
  );
}

/**
 * ScanAgainButton
 * @param {string} setScanData
 * @returns {JSX.Element} TouchableOpacity
 */
function ScanAgainButton({ setScanData }: { setScanData: any }): JSX.Element {
  console.log(setScanData);
  return (
    <TouchableOpacity onPress={() => setScanData(undefined)}>
      <Text>Scan Again?</Text>
    </TouchableOpacity>
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
