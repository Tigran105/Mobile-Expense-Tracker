import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';
import AddExpenseForm from '@components/AddExpenseForm';
import {useEffect} from "react";

const Container = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: #fff;
`;

const ExpenseItem = styled(View)`
    padding: 12px;
    margin-vertical: 4px;
    background-color: #f9f9f9;
    border-radius: 8px;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
    elevation: 2;
`;

const ExpenseText = styled(Text)`
    font-size: 16px;
    color: #333;
`;

const Separator = styled(View)`
  height: 8px;
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
            <ExpenseText>{item.title}: ${item.amount.toFixed(2)}</ExpenseText>
          </ExpenseItem>
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={<ExpenseText>No expenses yet</ExpenseText>}
      />
    </Container>
  );
}
