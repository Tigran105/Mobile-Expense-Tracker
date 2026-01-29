import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStore } from '@store/store';
import Counter from '@components/Counter';
import { useEffect, useState } from 'react';
import { saveItem, getItem } from '@utils/storage';
import type { RootStackParamList } from '@navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  const [savedCount, setSavedCount] = useState<number | null>(null);

  useEffect(() => {
    const loadCount = async () => {
      const value = await getItem('count');
      if (value !== null) setSavedCount(parseInt(value, 10));
    };
    loadCount();
  }, []);

  useEffect(() => {
    saveItem('count', count.toString());
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
      <Pressable
        onPress={() => navigation.navigate('Counter')}
        style={{ padding: 10, backgroundColor: 'purple', borderRadius: 5, marginTop: 20 }}
      >
        <Text style={{ color: 'white' }}>Go to Counter Screen</Text>
      </Pressable>
    </View>
  );
}
