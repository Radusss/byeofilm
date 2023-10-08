import { StyleSheet, Text } from "react-native"; // Updated import
import BackgroundComponent from "../../components/BackgroundComponent";
import * as Font from "expo-font";
import EditScreenInfo from "../../components/EditScreenInfo";
import { View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    //<BackgroundComponent>
    <View style={styles.container}>
      <Text style={styles.textStyle}>Analytics</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
    //</BackgroundComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
  },
  separator: {
    marginVertical: 1,
    height: 1,
    width: "80%",
  },
});
