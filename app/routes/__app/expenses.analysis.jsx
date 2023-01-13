const DUMMY_EXPENSES = [
  {
    id: 'el',
    title: 'First Expense',
    amount: 29.98,
    data: new Date().toISOString(),
  },
  {
    id: 'him',
    title: 'Second Expense',
    amount: 12.99,
    data: new Date().toISOString(),
  },
];

import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
