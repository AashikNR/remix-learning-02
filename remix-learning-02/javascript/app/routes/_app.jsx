import { Outlet } from "@remix-run/react";
import expensiveStyle from "../styles/expenses.css";
import ExpensesHeader from "../components/navigation/ExpensesHeader";

export default function ExpenseeAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />;
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensiveStyle }];
}
