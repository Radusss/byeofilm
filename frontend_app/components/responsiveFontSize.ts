import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const responsiveFontSize = (f: number): number => {
  const temp = (f / 375.0) * screenWidth;
  return Math.round(temp);
};
