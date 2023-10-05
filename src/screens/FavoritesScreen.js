import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MealsList } from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
