import { View, Text, Pressable } from 'react-native';
import { useStore } from '@store/store';
import { saveItem, getItem } from '@utils/storage';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Count: {count}</Text>
      <Text style={{ marginBottom: 20 }}>Saved count: {savedCount ?? 'none'}</Text>
      <Pressable
        onPress={() => {
          increment();
          saveCount();
        }}
        style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Increment & Save</Text>
      </Pressable>
    </View>
  );
}
