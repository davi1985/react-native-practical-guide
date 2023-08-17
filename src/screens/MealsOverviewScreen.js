import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals overview screen - {categoryId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
