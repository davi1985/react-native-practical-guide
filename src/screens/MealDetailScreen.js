import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { IconButton } from "../components/IconButton";
import { List } from "../components/MealDetail/List";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { MealDetails } from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../../store/context/favorite-context";

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealsIdFavorie = ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealsIdFavorie) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Meal Detail",
      headerRight: () => (
        <IconButton
          icon={mealsIdFavorie ? "star" : "star-outline"}
          color="#fff"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const {
    title,
    duration,
    affordability,
    complexity,
    color,
    imageUrl,
    ingredients,
    steps,
  } = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <MealDetails
        duration={duration}
        affordability={affordability}
        complexity={complexity}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients:</Subtitle>
          <List data={ingredients} />

          <Subtitle>Steps:</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
    borderColor: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
