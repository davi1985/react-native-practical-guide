import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, FlatList, View, useWindowDimensions } from "react-native";

import { GuessLogItem } from "../../components/game/GuessLogItem";
import { NumberContainer } from "../../components/game/NumberContainer";
import { Card } from "../../components/ui/Card";
import { InstructionText } from "../../components/ui/InstructionText";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { Title } from "../../components/ui/Title";

import { generateRandomBetween } from "../../utils";

import { styles } from "./styles";

let MIN_BOUNDARY = 1;
let MAX_BOUNDARY = 100;

const directions = {
  LOWER: "lower",
  GREATER: "greater",
};

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    (MIN_BOUNDARY = 1), (MAX_BOUNDARY = 100);
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === directions.LOWER && currentGuess < userNumber) ||
      (direction === directions.GREATER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }

    if (direction === directions.LOWER) {
      MAX_BOUNDARY = currentGuess;
    } else {
      MIN_BOUNDARY = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      MIN_BOUNDARY,
      MAX_BOUNDARY,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
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
    </>
  );

  if (width > 500) {
    content = (
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>

        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      {content}

      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}

        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - index}
              guess={item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
