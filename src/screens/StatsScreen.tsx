import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';

const Container = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: #f0f0f0;
`;

const TotalCard = styled(View)`
    background-color: #6200ee;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 16px;
    align-items: center;
`;

const TotalText = styled(Text)`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

const ExpenseCard = styled(View)`
    background-color: #fff;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 8px;
    elevation: 2;
`;

const ExpenseText = styled(Text)`
    font-size: 16px;
    color: #333;
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
      <TotalCard>
        <TotalText>Total: ${total.toFixed(2)}</TotalText>
      </TotalCard>

      <FlatList
        data={expenses}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <ExpenseCard>
            <ExpenseText>{item.title}: ${item.amount.toFixed(2)}</ExpenseText>
          </ExpenseCard>
        )}
        ListEmptyComponent={<ExpenseText>No expenses yet</ExpenseText>}
      />
    </Container>
  );
}
