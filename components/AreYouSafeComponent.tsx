// import React from "react";
// import { Text, StyleSheet } from "react-native";

// interface AreYouSafeProps {
//   lastReading: string;
//   threshold: number;
// }

// //const threshold = 5; // Set your threshold here

// const AreYouSafeComponent: React.FC<AreYouSafeProps> = ({
//   lastReading,
//   threshold,
// }) => {
//   const reading = parseFloat(lastReading);
//   const isWarning = isNaN(reading) || reading > threshold;

//   return (
//     <Text style={isWarning ? styles.warningText : styles.reassuringText}>
//       {isWarning ? "Biofilm detected!" : ""}
//     </Text>
//   );
// };

// const styles = StyleSheet.create({
//   warningText: {
//     color: "red",
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     alignSelf: "center",
//     marginVertical: 40, // Added margin for better spacing
//   },
//   reassuringText: {
//     color: "green",
//     fontSize: 25,
//     textAlign: "center",
//     alignSelf: "center",
//     marginVertical: 10, // Added margin for better spacing
//   },
// });

// export default AreYouSafeComponent;
import React from "react";
import { Text, StyleSheet, View } from "react-native";

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
    fontSize: 35,
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
