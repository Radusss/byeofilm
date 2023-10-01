import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface GraphProps {
  readings: string[];
  timestamps: string[];
}

export const Graph: React.FC<GraphProps> = ({ readings, timestamps }) => {
  // Check if readings and timestamps are not empty
  const firstReading = readings.length > 0 ? readings[0] : "No readings";
  const firstTimestamp =
    timestamps.length > 0 ? timestamps[0] : "No timestamps";

  return (
    <View>
      <Text style={styles.text}>First Reading: {firstReading}</Text>
      <Text style={styles.text}>First Timestamp: {firstTimestamp}</Text>
    </View>
  );
};

// Add some basic styles to ensure text is visible
const styles = StyleSheet.create({
  //   container: {
  //     padding: 16,
  //     backgroundColor: "black", // Ensure the background color contrasts with the text color
  //   },
  text: {
    fontSize: 16,
    color: "white", // Ensure text color is visible on the background
  },
});
