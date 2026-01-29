import styled from 'styled-components/native';
import Button from './Button';
import { Text, View } from 'react-native';

const Container = styled(View)`
  align-items: center;
`;

const CountText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function Counter({ count, onIncrement, onDecrement }: Props) {
  return (
    <Container>
      <CountText>{count}</CountText>
      <Button title="Increment" onPress={onIncrement} />
      <Button title="Decrement" onPress={onDecrement} />
    </Container>
  );
}
