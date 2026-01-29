import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const InfoText = styled(Text)`
    font-size: 20px;
    font-weight: 500;
    color: #333;
    text-align: center;
    padding: 16px;
`;

export default function FutureScreen() {
  return (
    <Container>
      <InfoText>This is a separate screen for future features</InfoText>
    </Container>
  );
}
