import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import useFetchData from "./useFetchData";
import HealthyTip from "./HealthyTipComponent";
import DoctorButton from "./DoctorButtonComponent";

export default function AveragePanel({ path }: { path: string }) {
  const { readings, timestamps } = useFetchData();

  // Calculate the average of the last 10 readings
  const average = useMemo(() => {
    const last10Readings = readings.slice(-10);
    const sum = last10Readings.reduce(
      (acc, reading) => acc + parseFloat(reading),
      0
    );
    return last10Readings.length ? (sum / last10Readings.length).toFixed(2) : 0;
  }, [readings]);

  // Determine the background color and message based on the average
  const backgroundColor =
    parseFloat(average as string) > 250
      ? "rgba(255, 0, 0, 0.5)"
      : "rgba(0, 255, 0, 0.5)";
  const message =
    parseFloat(average as string) > 250
      ? `Avg last hour: ${average}\n\n Infection detected`
      : `Avg last hour: ${average}\n\nNo present infection. \n You are doing good!`;

  const getBorderColor = (opacity: number) => {
    const color =
      parseFloat(average as string) > 250 ? "255, 0, 0" : "0, 255, 0";
    return `rgba(${color}, ${opacity})`;
  };

  const AveragePanelComponent: React.FC = () => (
    <View style={[styles.borderOuter, { borderColor: getBorderColor(0.3) }]}>
      <View style={[styles.borderMid, { borderColor: getBorderColor(0.45) }]}>
        <View
          style={[styles.borderInner, { borderColor: getBorderColor(0.55) }]}
        >
          <View style={[styles.rectangle, { backgroundColor }]}>
            <Text style={styles.text}>{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.spacing}>
        <AveragePanelComponent />
      </View>
      <View style={styles.spacing}>
        <HealthyTip text="Tip: Nuts may help you lose weight and reduce the risk of developing type 2 diabetes and heart disease." />
      </View>
      <View style={styles.spacing}>
        <DoctorButton
          logoSource={require("./../assets/images/hermes.png")} // Use require for the local image
          link="https://www.google.com/search?q=doctors+near+me&rlz=1C1GCEA_enNL1011NL1011&oq=doctors&gs_lcrp=EgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIHCAEQLhiABDIHCAIQABiABDIHCAMQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg80gEIMTg2NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  borderOuter: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 1,
  },
  borderMid: {
    borderRadius: 15,
    borderWidth: 2,
    padding: 1,
  },
  borderInner: {
    borderRadius: 15,
    borderWidth: 3,
    padding: 1,
  },
  rectangle: {
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  spacing: {
    marginVertical: 10, // Adjust this value to get the desired spacing
    alignItems: "center", // Center children along the cross-axis (horizontal)
    justifyContent: "center", // Center children along the main-axis (vertical)
  },
});
