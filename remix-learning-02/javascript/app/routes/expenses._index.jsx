// import expensesStyles from "../styles/expenses.css";
import ExpenseList from "../components/expenses/ExpensesList";

export default function Expense() {
  return <ExpenseList expenses={DUMMY_DATA} />;
}

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

// export function links() {
//   return [{ rel: "stylesheet", href: expensesStyles }];
// }
