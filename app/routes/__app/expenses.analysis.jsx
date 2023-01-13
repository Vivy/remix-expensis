import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Chart from '~/components/expenses/Chart';
import { useLoaderData } from '@remix-run/react';
export { loader } from '../expenses.raw';

export default function ExpensesAnalysisPage() {
  const DUMMY_EXPENSES = useLoaderData();
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
