import { Text, View } from "react-native";

import { styles } from "./styles";

export const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
);
