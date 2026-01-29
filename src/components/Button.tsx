import styled from 'styled-components/native';
import { Pressable, Text } from 'react-native';

const StyledButton = styled(Pressable)`
    background-color: #2563eb; /* blue-500 */
    padding: 12px;
    border-radius: 6px;
    margin-vertical: 8px;
`;

const ButtonText = styled(Text)`
    color: white;
    text-align: center;
`;

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}
