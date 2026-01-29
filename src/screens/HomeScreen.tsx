import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStore } from '@store/store';
import Counter from '@components/Counter';
import { useEffect } from 'react';
import { getItem } from '@utils/storage';
import type { RootStackParamList } from '@navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  useEffect(() => {
    const loadCount = async () => {
      const value = await getItem('count');
      if (value !== null) {
        const parsed = parseInt(value, 10);
        if (!isNaN(parsed)) useStore.setState({ count: parsed });
      }
    };
    loadCount();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />

      <Pressable
        onPress={() => navigation.navigate('Future')}
        style={{ padding: 10, backgroundColor: 'gray', borderRadius: 5, marginTop: 20 }}
      >
        <Text style={{ color: 'white' }}>Go to Future Screen</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Expenses')}
        style={{ padding: 10, backgroundColor: 'green', borderRadius: 5, marginTop: 20 }}
      >
        <Text style={{ color: 'white' }}>Go to Expenses</Text>
      </Pressable>
    </View>
  );
}
