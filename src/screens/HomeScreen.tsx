import { View } from 'react-native';
import { useStore } from '@store/store';
import Counter from '@components/Counter';
import { useEffect, useState } from 'react';
import { saveItem, getItem } from '@utils/storage';

export default function HomeScreen() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  const [savedCount, setSavedCount] = useState<number | null>(null);

  const saveCount = async () => {
    await saveItem('count', count.toString());
  };

  const loadCount = async () => {
    const value = await getItem('count');
    if (value !== null) setSavedCount(parseInt(value, 10));
  };

  useEffect(() => {
    loadCount();
  }, []);

  useEffect(() => {
    saveCount();
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </View>
  );
}
