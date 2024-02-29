import AppHeader from "@/components/AppHeader";
import ActiveBinButton from "@/components/scan/ActiveBinButton";
import RecycleButton from "@/components/scan/RecycleButton";
import ScanBarcode from "@/components/scan/ScanBarcode";
import { icons } from "@/constants/Colors";
import { binsArr } from "@/lib/bins";
import { productsArr } from "@/lib/products";
import useRecycleStore from "@/store/RecycleStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { PropsWithChildren, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function scan() {
  const { addProduct, products, items } = useRecycleStore();

  const [binActive, setBinActive] = useState(false);
  const [binActiveName, setBinActiveName] = useState(
    "Please scan a bin to begin recycling"
  );
  const [binActiveType, setBinActiveType] = useState("");

  const [quantity, setQuantity] = useState<number>(0);

  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    setQuantity(items);
    if (!binActive) {
      setBinActiveName("Please scan a bin to begin recycling");
      setBinActiveType("");
    }
  }, [products, binActive]);

  const binCheck = () => {
    if (!binActive) {
      return Alert.alert("Please scan a bin to begin recycling");
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

  // TODO: ensure bin data is passed to where it needs to be
  const activeBinForRecycling = (bin: any) => {
    console.log("activeBinForRecycling", bin);
    setBinActive(true);

    if (bin && bin.name && bin.type) {
      console.log("connected to bint");

      setBinActiveName(`Recycling at ${bin.name.toUpperCase()}`);
      setBinActiveType(`This bins takes ${bin.type.toUpperCase()}`);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Screen
        options={{
          header: () => <AppHeader text="Barcode Scanner" />,
        }}
      />

      <ScanBarcode
        handleScannedData={handleScannedData}
        scanned={scanned}
        setScanned={setScanned}
      />

      <View>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          {binActiveName}
        </Text>
        <Text style={{ color: "black", textAlign: "center", fontSize: 12 }}>
          {binActiveType}
        </Text>
      </View>

      <View style={icons.iconsContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles["colRecycle"]}>
            {binActive && <RecycleButton productCount={quantity} />}
          </View>

          <View style={styles["colReScan"]}>
            <TouchableOpacity
              style={[
                icons.iconBase,
                icons.iconContainer,
                !binActive && {
                  borderWidth: 4,

                  borderColor: "red",
                },
              ]}
              onPress={() => setScanned(false)}
            >
              <MaterialCommunityIcons
                name="camera-flip"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>

          <View style={styles["colActiveBin"]}>
            {/* <ScanAgainButton setScanData={setScanData} /> */}
            <ActiveBinButton
              binActive={binActive}
              setBinActive={setBinActive}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  colRecycle: {
    width: 100,
  },
  colReScan: {
    width: 100,
  },
  colActiveBin: {
    width: 100,
  },
});
