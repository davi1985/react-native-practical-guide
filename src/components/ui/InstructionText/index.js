import { Text } from "react-native";

import { styles } from "./styles";

export const InstructionText = ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
);
