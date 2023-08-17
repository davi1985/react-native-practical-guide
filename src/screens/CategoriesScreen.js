import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};
