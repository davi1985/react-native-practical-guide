import { AppRegistry, Button, Platform, Text } from "react-native";

import { name as appName } from "./app.json";

import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Text>Hello World Navigation Drawer</Text>
    </NavigationContainer>
  );
};

export default App;

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}
