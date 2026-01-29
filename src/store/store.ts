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
  loadExpenses: () => void; // новый метод
};

export const useStore = create<State>((set, get) => ({
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
  loadExpenses: async () => {
    const data = await getItem('expenses');
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          set({ expenses: parsed });
        }
      } catch (e) {
        console.error('Failed to parse expenses from storage', e);
      }
    }
  },
}));
