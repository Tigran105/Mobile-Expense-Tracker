import { View, Text } from 'react-native';
import Button from './Button';

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function Counter({ count, onIncrement, onDecrement }: Props) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Count: {count}</Text>
      <Button title="Increment" onPress={onIncrement} color="green" />
      <Button title="Decrement" onPress={onDecrement} color="red" />
    </View>
  );
}
