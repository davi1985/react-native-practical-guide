import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/colors";

export const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: COLORS.accent500,
    fontSize: 24,
  },
});
