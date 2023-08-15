import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../../constants/colors";

const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.yellow500,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.yellow500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
