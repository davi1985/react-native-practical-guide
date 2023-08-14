import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { NumberContainer } from "../../components/game/NumberContainer";
import { Card } from "../../components/ui/Card";
import { InstructionText } from "../../components/ui/InstructionText";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { Title } from "../../components/ui/Title";

import { generateRandomBetween } from "../../utils";
import { styles } from "./styles";

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
        <InstructionText style={styles.instructionText}>
          Hight or lower ?
        </InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>{/* Logs */}</View>
    </View>
  );
};
