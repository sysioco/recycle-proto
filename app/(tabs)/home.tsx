import { useAuth } from "@/provider/AuthProvider";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function home() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={signOut} style={styles.button}>
        <Text style={{ color: "#fff" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: "#448877",
    padding: 12,
    borderRadius: 4,
  },
});
