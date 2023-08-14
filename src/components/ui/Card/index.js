import { View } from "react-native";

import { styles } from "./styles";

export const Card = ({ children }) => (
  <View style={styles.card}>{children}</View>
);
