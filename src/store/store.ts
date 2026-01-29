import { create } from 'zustand';
import { saveItem, getItem } from '@utils/storage';

type Expense = {
  title: string;
  amount: number;
};

type State = {
  count: number;
  expenses: Expense[];
  increment: () => void;
  decrement: () => void;
  addExpense: (expense: Expense) => void;
};

export const useStore = create<State>((set) => ({
  count: 0,
  expenses: [],
  increment: () => {
    set((state) => {
      const newCount = state.count + 1;
      saveItem('count', newCount.toString());
      return { count: newCount };
    });
  },
  decrement: () => {
    set((state) => {
      const newCount = state.count - 1;
      saveItem('count', newCount.toString());
      return { count: newCount };
    });
  },
  addExpense: (expense) => {
    set((state) => {
      const newExpenses = [...state.expenses, expense];
      saveItem('expenses', JSON.stringify(newExpenses));
      return { expenses: newExpenses };
    });
  },
}));
