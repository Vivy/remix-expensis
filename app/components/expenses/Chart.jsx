import ChartBar from './ChartBar';

function Chart({ expenses }) {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth(); // starting at 0 => January => 0
    // console.log(expense, 'this is expense');
    // console.log(expenses, 'this is expenseSS');
    // console.log(expense.date, 'this is expense.date');
    // console.log(expenseMonth, 'this is expenseMONTH');
    chartDataPoints[expenseMonth]?.value += expense.amount;
  }

  // const progress = expenses.reduce((acc, curr) => {
  //   const expenseMonth = new Date(curr.date).getMonth();
  //   // acc[expenseMonth] = 9;
  //   console.log(curr.amount, 'This is CURR');
  //   if (expenseMonth in acc) {
  //     acc[expenseMonth] = acc[expenseMonth] + curr.amount;
  //   } else {
  //     acc[expenseMonth] = curr.amount;
  //   }

  //   return acc;
  // }, {});

  // console.log(progress, 'This is progress');

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  // const totalMaximum = Math.max(...dataPointValues);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <section>
      <h2>Monthly Expenses</h2>
      <ol className='chart'>
        {chartDataPoints.map((dataPoint, key) => (
          <ChartBar
            key={dataPoint.label}
            value={progress[key]}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </ol>
    </section>
  );
}

export default Chart;
