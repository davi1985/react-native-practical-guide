import { StyleSheet, Text, View } from "react-native";

export const MealDetails = ({ duration, complexity, affordability, color }) => (
  <View style={styles.details}>
    <Text style={styles.detailItem(color)}>{duration}m</Text>

    <Text style={styles.detailItem(color)}>{complexity.toUpperCase()}</Text>

    <Text style={styles.detailItem(color)}>{affordability.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  detailItem: (color) => ({
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 8,
    backgroundColor: color,
    marginHorizontal: 10,
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    borderColor: color,
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  }),
});
