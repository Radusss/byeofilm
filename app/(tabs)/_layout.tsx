import { Image, useColorScheme, Pressable } from "react-native"; // Import Image from react-native
import { Link, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import Colors from "../../constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: (
            { color, focused } // passing the focused prop to tabBarIcon
          ) => (
            <Image
              source={require("../../assets/images/home.png")} // Update source to your image file for the first tab
              style={{
                width: 28,
                height: 28,
                // tintColor: focused
                //   ? Colors[colorScheme ?? "light"].tint
                //   : color, // Apply tint color based on tab focused state
              }}
            />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: (
            { color, focused } // passing the focused prop to tabBarIcon
          ) => (
            <Image
              source={require("../../assets/images/analytics.png")}
              style={{
                width: 28,
                height: 28,
                // tintColor: focused
                //   ? Colors[colorScheme ?? "light"].tint
                //   : color, // Apply tint color based on tab focused state
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
