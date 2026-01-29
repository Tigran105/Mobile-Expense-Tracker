import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import CounterScreen from '@screens/CounterScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Counter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }} // TabNavigator сам показывает header
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{ title: 'Counter' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
