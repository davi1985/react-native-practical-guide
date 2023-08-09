import { View, Text, StyleSheet, Pressable } from "react-native";

export const GoalItem = ({ text, onDeleteItem }) => (
  <Pressable onPress={onDeleteItem}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#fff",
  },
});
