import { StyleSheet, Text, View } from "react-native";

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => (
  <View style={[styles.details, style]}>
    <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>

    <Text style={[styles.detailItem, textStyle]}>
      {complexity.toUpperCase()}
    </Text>

    <Text style={[styles.detailItem, textStyle]}>
      {affordability.toUpperCase()}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  detailItem: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 8,
    marginHorizontal: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 4,
    borderWidth: 1,
  },
});
