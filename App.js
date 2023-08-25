import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { AppRegistry, Button, Platform, Text } from "react-native";

import "react-native-gesture-handler";

import { name as appName } from "./app.json";

import { CategoriesScreen } from "./src/screens/CategoriesScreen";
import { MealsOverviewScreen } from "./src/screens/MealsOverviewScreen";
import { MealDetailScreen } from "./src/screens/MealDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#341401",
            },
            headerTintColor: "white",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />

          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />

          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
