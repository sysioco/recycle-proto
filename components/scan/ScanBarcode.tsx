import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScanBarcode({
  scanData,
  handleBarCodeScanned,
}: {
  scanData: any;
  handleBarCodeScanned: any;
}): JSX.Element {
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

      <Text>{scanData}</Text>
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
