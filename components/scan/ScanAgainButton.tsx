import { icons } from "@/constants/Colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

/**
 * ScanAgainButton
 * @param {string} setScanData
 * @returns {JSX.Element} TouchableOpacity
 */
export default function ScanAgainButton({
  setScanData,
}: {
  setScanData: any;
}): JSX.Element {
  return (
    <TouchableOpacity
      style={[icons.iconBase, icons.iconContainer]}
      onPress={() => setScanData(undefined)}
    >
      <MaterialCommunityIcons name="camera-flip" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
