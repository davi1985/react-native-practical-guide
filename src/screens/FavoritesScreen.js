import { StyleSheet, View, Text } from "react-native";
import { MealsList } from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const { ids } = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));

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
