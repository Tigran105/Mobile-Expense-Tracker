import { ScrollView, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStore } from '@store/store';
import Counter from '@components/Counter';
import { useEffect } from 'react';
import { getItem } from '@utils/storage';
import type { RootStackParamList } from '@navigation/AppNavigator';
import styled from 'styled-components/native';

// Navigation prop type
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Props type for styled NavButton
type NavButtonProps = {
  bgColor: string;
};

// Styled components
const Container = styled(ScrollView)`
    flex: 1;
    background-color: #fff;
    padding: 24px;
`;

const Section = styled(View)`
    margin-bottom: 24px;
    align-items: center;
`;

const NavButton = styled(Pressable)<NavButtonProps>`
    width: 100%;
    padding: 14px;
    background-color: ${(props :NavButtonProps) => props.bgColor};
    border-radius: 8px;
    margin-bottom: 16px;
    align-items: center;
`;

const NavText = styled(Text)`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  // Load count from storage on mount
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
    <Container contentContainerStyle={{ alignItems: 'center' }}>
      {/* Counter Section */}
      <Section>
        <Counter count={count} onIncrement={increment} onDecrement={decrement} />
      </Section>

      {/* Navigation Buttons */}
      <Section>
        <NavButton bgColor="#6200ee" onPress={() => navigation.navigate('Future')}>
          <NavText>Future Screen</NavText>
        </NavButton>

        <NavButton bgColor="#008000" onPress={() => navigation.navigate('Expenses')}>
          <NavText>Expenses</NavText>
        </NavButton>

        <NavButton bgColor="#ff8c00" onPress={() => navigation.navigate('Counter')}>
          <NavText>Counter Screen</NavText>
        </NavButton>

        <NavButton bgColor="#4b0082" onPress={() => navigation.navigate('Stats')}>
          <NavText>Stats</NavText>
        </NavButton>
      </Section>
    </Container>
  );
}
