import { useEffect } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';

const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 16px;
`;

const TotalText = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
`;

const ExpenseItem = styled(Text)`
    font-size: 16px;
    color: #333;
    margin-bottom: 4px;
`;

export default function StatsScreen() {
  const expenses = useStore((state) => state.expenses);
  const total = useStore((state) => state.total);
  const loadExpenses = useStore((state) => state.loadExpenses);

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <Container>
      <TotalText>Total: ${total.toFixed(2)}</TotalText>

      {expenses.map((e, idx) => (
        <ExpenseItem key={idx}>
          {e.title}: ${e.amount.toFixed(2)}
        </ExpenseItem>
      ))}
    </Container>
  );
}
