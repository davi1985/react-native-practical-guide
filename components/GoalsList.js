import { FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./GoalItem";

export const GoalsItems = ({ courseGoals, onDeleteItem }) => (
  <View style={styles.goalsContainer}>
    <FlatList
      alwaysBounceVertical={false}
      data={courseGoals}
      renderItem={({ item }) => (
        <GoalItem text={item.text} onDeleteItem={onDeleteItem} />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});
