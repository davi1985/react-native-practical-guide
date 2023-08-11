import { StyleSheet, Text, View } from "react-native";
import { Title } from "../components/Title";

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <View>
        <Text>Hight or lower ?</Text>
        {/* + _ */}
      </View>

      <View>{/* Logs */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
