import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "@screens/HomeScreen";
import CounterScreen from "@screens/CounterScreen";
import FutureScreen from "@screens/FutureScreen";
import ExpensesScreen from "@screens/ExpensesScreen";

export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
  Future: undefined;
  Expenses: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Future" component={FutureScreen} />
        <Stack.Screen name="Expenses" component={ExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
