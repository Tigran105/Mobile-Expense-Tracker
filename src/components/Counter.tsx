import { View, Text, Pressable } from 'react-native';

type Props = {
  count: number;
  onIncrement: () => void;
};

export default function Counter({ count, onIncrement }: Props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{count}</Text>
      <Pressable
        onPress={onIncrement}
        style={{ padding: 10, backgroundColor: 'green', borderRadius: 5, marginTop: 10 }}
      >
        <Text style={{ color: 'white' }}>Increment</Text>
      </Pressable>
    </View>
  );
}
