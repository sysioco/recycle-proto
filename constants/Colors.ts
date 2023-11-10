import { StyleSheet } from "react-native";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
};

export const theme = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "PrimaryFont",
  },
  textSubtext: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PrimaryFont",
  },
  textDark: {
    fontSize: 18,
    color: "#004953",
    fontFamily: "PrimaryFont",
  },
  textSubtextDark: {
    color: "#004953",
    fontSize: 14,
    fontFamily: "PrimaryFont",
  },
});
