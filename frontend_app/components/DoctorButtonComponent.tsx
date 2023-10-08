import React from "react";
import { TouchableOpacity, Image, Linking, StyleSheet } from "react-native";

interface DoctorButtonProps {
  logoSource: number; // Change the prop type to number for require image source
  link: string;
}

const DoctorButton: React.FC<DoctorButtonProps> = ({ logoSource, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Image source={logoSource} style={styles.logo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 100, // Set width
    height: 100, // Set height
    borderRadius: 50, // Set borderRadius to half of width/height to create a circle
    backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% transparent black
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default DoctorButton;
