import { Text } from "react-native";

import { styles } from "./styles";

export const Title = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);
