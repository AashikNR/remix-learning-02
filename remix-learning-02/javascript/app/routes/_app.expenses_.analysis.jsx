import ExpenseStatistics from "../components/expenses/ExpenseStatistics";
import Chart from "../components/expenses/Chart";
// import expensesStyles from "../styles/expenses.css";

// export function links() {
//   return [{ rel: "stylesheet", href: expensesStyles }];
// }

const DUMMY_DATA = [
  {
    id: "e1",
    title: "First expense",
    amount: 11.11,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 11.11,
    date: new Date().toISOString(),
  },
];

export default function Add() {
  return (
    <main>
      <Chart expenses={DUMMY_DATA} />
      <ExpenseStatistics expenses={DUMMY_DATA} />
    </main>
  );
}
