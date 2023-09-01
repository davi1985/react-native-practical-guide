import { Button, StyleSheet, Text, View } from "react-native";

export const UserScreen = ({ navigation }) => {
  const openDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.hightlight}>"User"</Text> screen!
      </Text>

      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hightlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
