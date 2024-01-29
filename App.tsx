import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/views/Home";
import Board from "./src/views/Board";

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
