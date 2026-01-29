import { create } from 'zustand';
import { saveItem, getItem } from '@utils/storage';

type Expense = {
  title: string;
  amount: number;
};

type State = {
  count: number;
  expenses: Expense[];
  total: number;
  addExpense: (expense: Expense) => void;
  removeExpense: (index: number) => void;
  loadExpenses: () => void;
};

export const useStore = create<State>((set, get) => ({
  count: 0,
  expenses: [],
  total: 0,



  addExpense: (expense) => {
    set((state) => {
      const newExpenses = [...state.expenses, expense];
      const newTotal = newExpenses.reduce((acc, e) => acc + e.amount, 0);

      saveItem('expenses', JSON.stringify(newExpenses));
      saveItem('total', newTotal.toString());

      return { expenses: newExpenses, total: newTotal };
    });
  },

  removeExpense: (index: number) => {
    set((state) => {
      const newExpenses = state.expenses.filter((_, i) => i !== index);
      const newTotal = newExpenses.reduce((acc, e) => acc + e.amount, 0);

      saveItem('expenses', JSON.stringify(newExpenses));
      saveItem('total', newTotal.toString());

      return { expenses: newExpenses, total: newTotal };
    });
  },

  loadExpenses: async () => {
    try {
      const expensesData = await getItem('expenses');
      const totalData = await getItem('total');

      const parsedExpenses: Expense[] = expensesData ? JSON.parse(expensesData) : [];
      const parsedTotal: number = totalData ? parseFloat(totalData) : 0;

      set({ expenses: parsedExpenses, total: parsedTotal });
    } catch (e) {
      console.error('Failed to load expenses or total', e);
    }
  },
}));