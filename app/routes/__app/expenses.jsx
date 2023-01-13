const DUMMY_EXPENSES = [
  {
    id: 'el',
    title: 'First Expense',
    amount: 69,
    data: new Date().toISOString(),
  },
  {
    id: 'him',
    title: 'Second Expense',
    amount: 169,
    data: new Date().toISOString(),
  },
];

import { Outlet } from '@remix-run/react';
import ExpensesList from '~/components/expenses/ExpensesList';

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}
