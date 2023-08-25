import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";
import { useNavigation } from "@react-navigation/native";
import { MealDetails } from "./MealDetails";

export const MealItem = ({
  id,
  color,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <Card style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />

            <Text style={styles.title}>{title}</Text>
          </View>

          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
            color={color}
          />
        </View>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 6,
    borderRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  // button: {
  //   flex: 1,
  // },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
