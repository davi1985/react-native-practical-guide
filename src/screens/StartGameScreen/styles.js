import { StyleSheet, Dimensions } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: (height) => ({
    flex: 1,
    marginTop: height < 380 ? 30 : 100,
    alignItems: "center",
  }),
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
