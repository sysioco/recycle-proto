import Colors from "@/constants/Colors";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AppHeader({ text }: { text: string }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    color: Colors.light.text,
    fontSize: 30,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
