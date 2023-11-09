import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ScanBarcode({
  handleBarCodeScanned,
  scanData,
}: {
  handleBarCodeScanned: any;
  scanData: any;
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
});
