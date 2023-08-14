import { StyleSheet, Text, View, Alert } from "react-native";
import { Title } from "../components/ui/Title";
import { useEffect, useState } from "react";
import { generateRandomBetween } from "../utils";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { InstructionText } from "../components/ui/InstructionText";
import { Card } from "../components/ui/Card";

let MIN_BOUNDARY = 1;
let MAX_BOUNDARY = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "Yoe know that this is wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);

      return;
    }

    if (direction === "lower") {
      MAX_BOUNDARY = currentGuess;
    } else {
      MIN_BOUNDARY = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      MIN_BOUNDARY,
      MAX_BOUNDARY,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText>Hight or lower ?</InstructionText>

        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </Card>

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
