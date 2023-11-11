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

export const icons = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
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
