import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import HomeScreen from "./Home";
import Board from "./Board";
import storage from "./Storeage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "QUESTION",
          })}
        />
        <Stack.Screen
          name="Board"
          component={Board}
          options={({ navigation }) => ({
            title: "SCOREBOARD",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
