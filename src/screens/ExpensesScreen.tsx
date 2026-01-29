import { View, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import AddExpenseForm from '@components/AddExpenseForm';
import { useStore } from '@store/store';

const Container = styled(View)`
    flex: 1;
    padding: 16px;
    background-color: #f0f0f0;
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

export default function ExpensesScreen() {
  const expenses = useStore((state) => state.expenses);
  const loadExpenses = useStore((state) => state.loadExpenses);

  // Загружаем сохраненные расходы при монтировании
  useStore((state) => {
    loadExpenses();
  });

  return (
    <Container>
      {/* Форма добавления */}
      <AddExpenseForm />

      {/* Список расходов */}
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
