import { Button, StyleSheet, Text, View } from "react-native";

export const UserScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.hightlight}>"User"</Text> screen!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hightlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
