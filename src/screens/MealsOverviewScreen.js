import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "../components/MealsList/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealsList } from "../components/MealsList/MealsList";

export const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
