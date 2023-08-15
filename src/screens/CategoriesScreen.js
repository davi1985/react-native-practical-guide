import { FlatList } from "react-native";
import { CategoryGridTile } from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => (
  <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
);

export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={renderCategoryItem}
    />
  );
};
