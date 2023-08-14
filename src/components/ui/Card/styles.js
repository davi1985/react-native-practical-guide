import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../../constants/colors";

const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: COLORS.primary800,
    marginHorizontal: 24,
    borderRadius: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
