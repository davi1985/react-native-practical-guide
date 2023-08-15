import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../../constants/colors";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: COLORS.white,
    textAlign: "center",
    borderWidth: Platform.select({
      ios: 0,
      android: 2,
    }), //  or this -> Platform.OS === "android" ? 2 : 0,
    borderColor: COLORS.white,
    padding: 12,
    borderRadius: 12,
    maxWidth: "80%",
    width: 300,
  },
});
