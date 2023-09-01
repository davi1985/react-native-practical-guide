import { StyleSheet, Text, View } from "react-native";

export const WelcomeScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.hightlight}>"Welcome"</Text> screen!
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
