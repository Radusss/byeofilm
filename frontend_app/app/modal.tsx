import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function ModalScreen() {
  const handlePress = () => {
    const url = "https://2023.igem.wiki/groningen/index.html";

    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />

      <TouchableOpacity onPress={handlePress} style={styles.linkContainer}>
        <Text style={styles.linkText}>Open Web URL</Text>
      </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  linkContainer: {
    padding: 10,
    backgroundColor: "#4285f4",
    borderRadius: 5,
    marginTop: 20,
  },
  linkText: {
    color: "#fff",
  },
});
