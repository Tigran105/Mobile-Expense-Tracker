# Mobile Expense Tracker

A simple **mobile expense tracker** built with **React Native, Expo, TypeScript, Zustand, and Styled Components**.  
Track your expenses, view totals, and manage your finances on the go.

---

## 📁 Project Structure
│
├─ src/
│ ├─ components/ # Reusable components like AddExpenseForm
│ ├─ screens/ # App screens: Home, Counter, Expenses, Stats, Future
│ ├─ navigation/ # AppNavigator (Stack + Tabs)
│ └─ store/ # Zustand store with AsyncStorage persistence
│
├─ App.tsx # Entry point
├─ index.ts # Root registration
├─ package.json
└─ tsconfig.json

## ⚡ Features

- ✅ **Add Expenses** with title and amount
- ✅ **Delete Expenses** with storage persistence
- ✅ **View Total Expenses** (automatically updated)
- ✅ **Counter Feature** with storage persistence
- ✅ **Bottom Tab Navigation** (Home, Expenses, Stats, Future)
- ✅ **AsyncStorage + Zustand** for state management
- ✅ **Styled Components** for UI
- 🚧 **Future/Feature Tab** ready for upcoming features

---

## 🛠 Tech Stack

- **React Native** (0.81.5)
- **Expo** (~54.0.32)
- **TypeScript**
- **Zustand** (state management)
- **AsyncStorage** (persistent storage)
- **Styled Components** (UI styling)
- **React Navigation** (Stack + Bottom Tabs)

---

## 🚀 Getting Started

1. **Clone the repo**:

```bash
git clone https://github.com/Tigran105/Mobile-Expense-Tracker.git
cd mobile-expense-tracker
npm install
npx expo start