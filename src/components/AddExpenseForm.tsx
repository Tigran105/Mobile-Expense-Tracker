import { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import styled from 'styled-components/native';
import Button from './Button';
import { useStore } from '@store/store';

const Container = styled(View)`
  width: 100%;
  margin-bottom: 16px;
`;

export default function AddExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const addExpense = useStore((state) => state.addExpense);

  const handleAdd = () => {
    const num = parseFloat(amount);
    if (!title || isNaN(num)) {
      Alert.alert('Error', 'Please enter valid title and amount');
      return;
    }

    addExpense({ title, amount: num });
    setTitle('');
    setAmount('');
  };

  return (
    <Container>
      <TextInput
        placeholder="Expense title"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 6,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 6,
          padding: 10,
          marginBottom: 8,
        }}
      />
      <Button title="Add Expense" onPress={handleAdd} />
    </Container>
  );
}
