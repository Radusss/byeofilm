// import React from "react";
// import { Text, View, StyleSheet } from "react-native";

// interface HealthyTipProps {
//   text: string;
// }

// const HealthyTip: React.FC<HealthyTipProps> = ({ text }) => (
//   <View style={styles.container}>
//     <Text style={styles.text}>{text}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default HealthyTip;
// HealthyTipComponent.tsx
// import React from "react";
// import { Text, View, StyleSheet } from "react-native";

// interface HealthyTipProps {
//   text: string;
// }

// const HealthyTip: React.FC<HealthyTipProps> = ({ text }) => (
//   <View style={styles.container}>
//     <Text style={styles.text}>{text}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 15,
//     backgroundColor: "gray",
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     fontSize: 16,
//   },
// });

// export default HealthyTip;
import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

type HealthyTipProps = {
  text: string;
  style?: ViewStyle;
};

export default function HealthyTip({ text, style }: HealthyTipProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold", // Make text bold
    fontSize: 18, // Increase font size
    // fontFamily: 'Your-Font-Family-Here',  // Optional: specify a font family
  },
});
