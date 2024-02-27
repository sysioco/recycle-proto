import { supabase } from "@/config/supabase";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function index() {
  const [email, setEmail] = useState("derek@sysio.co");
  const [password, setPassword] = useState("R3cyclePro7o");
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) Alert.alert("Error signing in", error.message);

    setLoading(false);
  };

  const onSignUpPress = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert("Error signing up", error.message);
    else Alert.alert("Sign up successful");

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={loading} />
      <Text style={styles.header}>Login</Text>
      <TextInput
        placeholderTextColor="#363636"
        autoCapitalize="none"
        placeholder="john@example.com"
        value={email}
        onChangeText={setEmail}
        style={styles.inputField}
      />
      <TextInput
        placeholderTextColor="#363636"
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.inputField}
      />

      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text style={{ color: "#fff" }}>Sign In</Text>
      </TouchableOpacity>
      <Button
        onPress={onSignUpPress}
        title="Create Account"
        color={"#000"}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 5,
    color: "#000",
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#363636",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: "#448877",
    padding: 12,
    borderRadius: 4,
  },
});
