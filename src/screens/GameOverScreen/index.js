import { Image, Text, View } from "react-native";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { Title } from "../../components/ui/Title";

import { styles } from "./styles";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => (
  <View style={styles.rootContainer}>
    <Title>Game Over</Title>

    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/success.png")}
      />
    </View>

    <Text style={styles.summaryText}>
      Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
      rounds to guess the number{" "}
      <Text style={styles.highlight}>{userNumber}</Text>.
    </Text>

    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
  </View>
);
