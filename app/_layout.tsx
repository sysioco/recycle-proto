import { AuthProvider, useAuth } from "@/provider/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Font face declaration
  const [loaded, error] = useFonts({
    PrimaryFont: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const { session, initialized } = useAuth();

  const router = useRouter();
  // const segements = useSegments();

  useEffect(() => {
    if (!initialized) return;

    // const inAuthGroup = segements[0] === "(auth)";
    if (session) {
      // Redirect authenticated users to the list page
      router.replace("/home");
    } else if (!session) {
      // Redirect unauthenticated users to the login page
      router.replace("/");
    }
  }, [session, initialized]);

  if (!session) return <Slot />;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Stack.Screen
        name="(modals)/recycle"
        options={{
          title: "Ready to recycle?",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close" size={25} color="#fff" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#004953",
          },
          headerTitleStyle: {
            fontFamily: "PrimaryFont",
            color: "#fff",
          },
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
