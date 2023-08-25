import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";

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
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>

      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        color={color}
      />

      <Text>Ingredients:</Text>

      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <Text>Steps</Text>

      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
