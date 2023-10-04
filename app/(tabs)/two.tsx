// import { StyleSheet, Image } from "react-native"; // Import Image from react-native
// import BackgroundComponent from "../../components/BackgroundComponent"; // Adjust the path to your BackgroundComponent

// import EditScreenInfo from "../../components/EditScreenInfo";
// import { View } from "../../components/Themed"; // Removed Text from import

// export default function TabTwoScreen() {
//   return (
//     <BackgroundComponent>
//       <View style={styles.container}>
//         <Image
//           source={require("../../assets/images/home.png")} // Update source to your image file
//           style={styles.logo} // Apply a style to control the image size and other styles
//         />
//         <View
//           style={styles.separator}
//           lightColor="#eee"
//           darkColor="rgba(255,255,255,0.1)"
//         />
//         <EditScreenInfo path="app/(tabs)/two.tsx" />
//       </View>
//     </BackgroundComponent>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     // Create a new style for your logo
//     width: 50, // You might want to adjust the dimensions to fit your logo's aspect ratio
//     height: 50, // You might want to adjust the dimensions to fit your logo's aspect ratio
//     resizeMode: "contain", // 'contain' ensures the entire logo is visible, adjusting the size to fit within the container if necessary
//     marginVertical: 30, // Keeps the margin as in the title style
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });
import { StyleSheet, Text } from "react-native"; // Updated import
import BackgroundComponent from "../../components/BackgroundComponent";

import EditScreenInfo from "../../components/EditScreenInfo";
import { View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    <BackgroundComponent>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Analytics</Text>
        {/* Replaced Image with Text */}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="app/(tabs)/two.tsx" />
      </View>
    </BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    // Created a new style for the text
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff", // Or any color of your choice
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
