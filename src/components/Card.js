import { StyleSheet, View } from "react-native";

export const Card = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    overflow: Platform.select({
      android: "hidden",
      ios: "visible",
    }),
  },
});
