import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { responsiveFontSize } from "./responsiveFontSize";
interface AreYouSafeProps {
  lastReading: string;
  threshold: number;
}

const AreYouSafeComponent: React.FC<AreYouSafeProps> = ({
  lastReading,
  threshold,
}) => {
  const reading = parseFloat(lastReading);
  const isWarning = isNaN(reading) || reading > threshold;

  return (
    <View style={isWarning ? styles.warningBox : null}>
      <Text style={isWarning ? styles.warningText : styles.reassuringText}>
        {isWarning ? "Biofilm detected" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  warningBox: {
    backgroundColor: "rgba(167, 0, 0, 0.3)", // gray, transparent background
    borderRadius: 10, // rounded corners
    padding: 10, // padding to ensure text does not touch the edges
    alignSelf: "center",
    marginVertical: 40,
  },
  warningText: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  reassuringText: {
    color: "green",
    fontSize: 25,
    textAlign: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default AreYouSafeComponent;
