import BackgroundComponent from "../../components/BackgroundComponent"; // Adjust the path to your BackgroundComponent
import { StyleSheet, Image } from "react-native";
import AveragePanel from "../../components/HomePageComponent";
import { View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    // Wrap existing components with BackgroundComponent
    //<BackgroundComponent>
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Logo_main_3.png")}
        style={styles.logo}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <AveragePanel path="app/(tabs)/index.tsx" />
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
