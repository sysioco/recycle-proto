import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

/**
 * RecycleButton
 * @param {number} productCount
 * @returns {JSX.Element} TouchableOpacity
 */
export default function RecycleButton({
  productCount = 0,
}: {
  productCount: number;
}): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.iconBase, styles.iconContainer]}
      onPress={() => router.push("/(modals)/recycle")}
    >
      {productCount !== 0 && (
        <View style={styles.indicator}>
          <Text style={styles.indicatorText}>{productCount}</Text>
        </View>
      )}

      <FontAwesome name="recycle" size={30} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  iconBase: { backgroundColor: "#448877" },
  indicator: {
    position: "absolute",
    top: -10,
    right: -10,
    borderRadius: 30,
    borderWidth: 2,
    width: 30,
    height: 30,
    borderColor: "#448877",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorText: {
    fontSize: 12,
  },
});
