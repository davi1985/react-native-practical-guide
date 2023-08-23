import { StyleSheet, FlatList, View, Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ item }) => {
    const category = CATEGORIES.filter(
      (category) => category.id === item.categoryIds[0]
    )[0];

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      color: category.color,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={({ id }) => id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
