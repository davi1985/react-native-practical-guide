import { View, Text } from "react-native";
import { styles } from "./styles";

export const GuessLogItem = ({ roundNumber, guess }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemText}>#{roundNumber}</Text>

    <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
  </View>
);
