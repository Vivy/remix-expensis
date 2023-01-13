const DUMMY_EXPENSES = [
  {
    id: 'el',
    title: 'First Expense',
    amount: 29.98,
    date: new Date().toISOString(),
  },
  {
    id: 'him',
    title: 'Second Expense',
    amount: 12.99,
    date: new Date().toISOString(),
  },
];

export function loader() {
  return DUMMY_EXPENSES;
}
