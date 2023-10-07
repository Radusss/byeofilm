// // export default HealthyTip;
// import React from "react";
// import { View, Text, StyleSheet, ViewStyle } from "react-native";

// type HealthyTipProps = {
//   text: string;
//   style?: ViewStyle;
// };

// export default function HealthyTip({ text, style }: HealthyTipProps) {
//   return (
//     <View style={[styles.container, style]}>
//       <Text style={styles.text}>{text}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     borderRadius: 15,
//     padding: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     textAlign: "center",
//     fontWeight: "bold", // Make text bold
//     fontSize: 18, // Increase font size
//     // fontFamily: 'Your-Font-Family-Here',  // Optional: specify a font family
//   },
// });
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Pressable,
  Linking,
} from "react-native";

type HealthyTipProps = {
  text: string;
  style?: ViewStyle;
  link?: string;
};

export default function HealthyTip({ text, style, link }: HealthyTipProps) {
  const handlePress = () => {
    if (link) {
      Linking.canOpenURL(link).then((supported) => {
        if (supported) {
          Linking.openURL(link);
        } else {
          console.log(`Don't know how to open URL: ${link}`);
        }
      });
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.7 : 1 },
        styles.container,
        style,
      ]}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dark", //"#4caf50",
    // Or any other color of your choice
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
