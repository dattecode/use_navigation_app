import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const text = { name: "homeText ?" };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting", { text })}
      />
    </View>
  );
};

const Setting = ({ navigation, route }) => {
  const { text } = route.params;
  //si queremos usar la navegacion dentro de otros elementos
  //tenemos que usar el hook useNavigation eh importarlo
  //asi podemos usar la navegacion desde cualquier componente
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Text>{text.name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
