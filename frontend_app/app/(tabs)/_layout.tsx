import { Image, useColorScheme, Pressable, Linking } from "react-native";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

export default function TabLayout() {
  const colorScheme = "dark";

  const openWebURL = () => {
    const url = "https://2023.igem.wiki/groningen/index.html";
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

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
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/home.png")}
              style={{
                width: 28,
                height: 28,
                // tintColor: focused ? Colors[colorScheme ?? "light"].tint : color,
              }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={openWebURL}>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require("../../assets/images/analytics.png")}
              style={{
                width: 28,
                height: 28,
                // tintColor: focused ? Colors[colorScheme ?? "light"].tint : color,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
