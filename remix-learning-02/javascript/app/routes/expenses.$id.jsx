import ExpenseForm from "../components/expenses/ExpenseForm";
import expensesStyles from "../styles/expenses.css";

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export default function Index() {
  return <ExpenseForm />;
}
