import { View, Text, StyleSheet, Pressable } from "react-native";

export const GoalItem = ({ text, id, onDeleteItem }) => (
  <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={onDeleteItem.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalText}>{text}</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
