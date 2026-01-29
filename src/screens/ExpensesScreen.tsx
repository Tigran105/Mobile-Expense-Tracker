import { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';
import AddExpenseForm from '@components/AddExpenseForm';

const Container = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: #fff;
`;

const ExpenseItem = styled(View)`
    padding: 12px;
    margin-vertical: 6px;
    background-color: #f3f3f3;
    border-radius: 6px;
`;

const ExpenseText = styled(Text)`
    font-size: 16px;
    color: #333;
`;

export default function ExpensesScreen() {
  const expenses = useStore((state) => state.expenses);
  const loadExpenses = useStore((state) => state.loadExpenses);

  useEffect(() => {
    loadExpenses();
  }, []);

  return (
    <Container>
      <AddExpenseForm />

      <FlatList
        data={expenses}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ExpenseItem>
            <ExpenseText>{item.title}: ${item.amount}</ExpenseText>
          </ExpenseItem>
        )}
        ListEmptyComponent={<ExpenseText>No expenses yet</ExpenseText>}
      />
    </Container>
  );
}
