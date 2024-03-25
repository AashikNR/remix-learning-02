import expensesStyles from "../styles/expenses.css";
import ExpenseList from "../components/expenses/ExpensesList";
import { Outlet } from "@remix-run/react";

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
    title: "demo expense",
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

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
