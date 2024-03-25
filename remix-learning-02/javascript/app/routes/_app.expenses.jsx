import ExpenseList from "../components/expenses/ExpensesList";
import { Outlet } from "@remix-run/react";
// import expensesStyles from "../styles/expenses.css";

// export function links() {
//   return [{ rel: "stylesheet", href: expensesStyles }];
// }

export default function Expense() {
  return (
    <>
      <Outlet />
      <main>
        <ExpenseList expenses={DUMMY_DATA} />
      </main>
    </>
  );
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

