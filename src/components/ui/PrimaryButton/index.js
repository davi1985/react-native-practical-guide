import { Pressable, Text, View } from "react-native";

import { COLORS } from "../../../constants/colors";
import { styles } from "./styles";

export const PrimaryButton = ({ children, onPress }) => (
  <View style={styles.buttonOuterContainer}>
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
      }
      onPress={onPress}
      android_ripple={{ color: COLORS.purple600 }}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  </View>
);
