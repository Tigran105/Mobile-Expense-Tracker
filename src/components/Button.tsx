import { Pressable, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
};

export default function Button({ title, onPress, color = 'blue' }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{ padding: 10, backgroundColor: color, borderRadius: 5, marginVertical: 5 }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </Pressable>
  );
}
