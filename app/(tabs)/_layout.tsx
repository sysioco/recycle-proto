import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarLabelStyle: {
          fontFamily: "PrimaryFont",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barcode-outline" size={25} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-circle-outline" size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
