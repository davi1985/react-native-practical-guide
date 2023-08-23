import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";

export const MealItem = ({
  color,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <Card style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />

            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailItem(color)}>{duration}m</Text>

            <Text style={styles.detailItem(color)}>
              {complexity.toUpperCase()}
            </Text>

            <Text style={styles.detailItem(color)}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 6,
    borderRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  // button: {
  //   flex: 1,
  // },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
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
