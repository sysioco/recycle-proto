import { icons } from "@/constants/Colors";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * ScanAgainButton
 * @param {string} setScanData
 * @returns {JSX.Element} TouchableOpacity
 */
export default function ActiveBinButton({
  setBinActive,
  binActive,
}: {
  setBinActive: any;
  binActive: boolean;
}): JSX.Element {
  return (
    <TouchableOpacity
      style={[
        binActive ? { backgroundColor: "#448877" } : { backgroundColor: "red" },
        icons.iconContainer,
      ]}
      onPress={() => setBinActive(false)}
    >
      <MaterialCommunityIcons name="trash-can-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );
}
