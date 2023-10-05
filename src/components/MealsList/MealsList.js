import { View, FlatList, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";
import { CATEGORIES } from "../../data/dummy-data";

export const MealsList = ({ items }) => {
  const renderMealItem = ({ item }) => {
    const category = CATEGORIES.filter(
      (category) => category.id === item.categoryIds[0]
    )[0];

    const mealItemProps = {
      id: item.id,
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
        data={items}
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
