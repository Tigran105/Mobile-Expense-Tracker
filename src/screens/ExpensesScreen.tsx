import { View, FlatList, Text, Pressable, Alert } from 'react-native';
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ExpenseText = styled(Text)`
    font-size: 16px;
    color: #333;
`;

const DeleteButton = styled(Pressable)`
  padding: 6px 12px;
  background-color: #ff4444;
  border-radius: 6px;
`;

const DeleteText = styled(Text)`
  color: white;
  font-weight: bold;
`;

export default function ExpensesScreen() {
  const expenses = useStore((state) => state.expenses);
  const loadExpenses = useStore((state) => state.loadExpenses);
  const removeExpense = useStore((state) => state.removeExpense);

  loadExpenses();

  const handleRemove = (index: number) => {
    Alert.alert('Confirm', 'Delete this expense?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => removeExpense(index) },
    ]);
  };

  return (
    <Container>
      <AddExpenseForm />

      <FlatList
        data={expenses}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <ExpenseCard>
            <ExpenseText>{item.title}: ${item.amount.toFixed(2)}</ExpenseText>
            <DeleteButton onPress={() => handleRemove(index)}>
              <DeleteText>Delete</DeleteText>
            </DeleteButton>
          </ExpenseCard>
        )}
        ListEmptyComponent={<ExpenseText>No expenses yet</ExpenseText>}
      />
    </Container>
  );
}
