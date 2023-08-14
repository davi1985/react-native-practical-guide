import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    borderRadius: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
