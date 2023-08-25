import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";

export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const {
    title,
    duration,
    affordability,
    complexity,
    color,
    imageUrl,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={ingredients} />

          <Subtitle>Steps:</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
    borderColor: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
