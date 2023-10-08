// // BackgroundComponent.tsx
import React, { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface BackgroundComponentProps {
  children: ReactNode;
}

const BackgroundComponent = ({ children }: BackgroundComponentProps) => (
  <ImageBackground
    source={require("../assets/images/background.png")}
    style={styles.backgroundImage}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default BackgroundComponent;
