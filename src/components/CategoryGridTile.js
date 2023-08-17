import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer(color)}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    overflow: Platform.select({
      android: "hidden",
      ios: "visible",
    }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: (color) => ({
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color,
    borderRadius: 8,
  }),
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
