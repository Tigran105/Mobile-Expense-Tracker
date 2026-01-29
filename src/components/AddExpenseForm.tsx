import { useState } from 'react';
import { View, TextInput, Pressable, Text, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useStore } from '@store/store';

const FormContainer = styled(View)`
    width: 100%;
    margin-bottom: 16px;
`;

const Input = styled(TextInput)`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 8px;
    font-size: 16px;
`;

const AddButton = styled(Pressable)`
    padding: 12px;
    background-color: #6200ee;
    border-radius: 8px;
    align-items: center;
`;

const ButtonText = styled(Text)`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export default function AddExpenseForm() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const addExpense = useStore((state) => state.addExpense);

  const handleAdd = () => {
    const parsedAmount = parseFloat(amount);
    if (!title || isNaN(parsedAmount)) {
      Alert.alert('Error', 'Please enter valid title and amount');
      return;
    }

    addExpense({ title, amount: parsedAmount });
    setTitle('');
    setAmount('');
  };

  return (
    <FormContainer>
      <Input
        placeholder="Expense title"
        value={title}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <AddButton onPress={handleAdd}>
        <ButtonText>Add Expense</ButtonText>
      </AddButton>
    </FormContainer>
  );
}
