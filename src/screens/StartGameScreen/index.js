import { useState } from "react";
import { Alert, TextInput, View, useWindowDimensions } from "react-native";

import { InstructionText } from "../../components/ui/InstructionText";
import { PrimaryButton } from "../../components/ui/PrimaryButton";
import { Title } from "../../components/ui/Title";
import { Card } from "../../components/ui/Card";

import { styles } from "./styles";

const MIN_NUMBER_VALUE = 0;
const MAX_NUMBER_VALUE = 99;

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { height, width } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => setEnteredNumber("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    const isValidChosenNumber =
      isNaN(chosenNumber) ||
      chosenNumber <= MIN_NUMBER_VALUE ||
      chosenNumber > MAX_NUMBER_VALUE;

    if (isValidChosenNumber) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );

      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer(height)}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a number</InstructionText>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
