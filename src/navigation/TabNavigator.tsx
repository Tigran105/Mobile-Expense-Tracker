import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ExpensesScreen from '@screens/ExpensesScreen';
import StatsScreen from '@screens/StatsScreen';
import FutureScreen from '@screens/FutureScreen';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Tab = createBottomTabNavigator();
const PlaceholderIcon = styled(Text)`
  font-size: 18px;
`;
export type RootTabParamList = {
  Home: undefined;
  Expenses: undefined;
  Stats: undefined;
  Future: undefined;
};
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#555',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <PlaceholderIcon>🏠</PlaceholderIcon>,
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarLabel: 'Expenses',
          tabBarIcon: () => <PlaceholderIcon>💸</PlaceholderIcon>,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: () => <PlaceholderIcon>📊</PlaceholderIcon>,
        }}
      />
      <Tab.Screen
        name="Future"
        component={FutureScreen}
        options={{
          tabBarLabel: 'Future',
          tabBarIcon: () => <PlaceholderIcon>🔮</PlaceholderIcon>,
        }}
      />
    </Tab.Navigator>
  );
}
