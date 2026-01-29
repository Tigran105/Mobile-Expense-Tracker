import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppNavigator from "@navigation/AppNavigator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
