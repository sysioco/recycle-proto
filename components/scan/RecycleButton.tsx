import { icons } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

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
      style={[icons.iconBase, icons.iconContainer]}
      onPress={() => router.push("/(modals)/recycle")}
    >
      {productCount !== 0 && (
        <View style={icons.indicator}>
          <Text style={icons.indicatorText}>{productCount}</Text>
        </View>
      )}

      <FontAwesome name="recycle" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
