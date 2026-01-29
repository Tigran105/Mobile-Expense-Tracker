import { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';

const Container = styled(View)`
    flex: 1;
    background-color: #fff;
    padding: 16px;
`;

const TotalCard = styled(View)`
    padding: 16px;
    background-color: #6200ee;
    border-radius: 12px;
    margin-bottom: 16px;
    align-items: center;
`;

const TotalText = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;

const ExpenseItem = styled(View)`
  padding: 12px;
  background-color: #f3f3f3;
  border-radius: 8px;
  margin-bottom: 8px;
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
          <ExpenseItem>
            <ExpenseText>{item.title}: ${item.amount.toFixed(2)}</ExpenseText>
          </ExpenseItem>
        )}
        ListEmptyComponent={<ExpenseText>No expenses yet</ExpenseText>}
      />
    </Container>
  );
}
