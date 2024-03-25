import { Outlet } from "@remix-run/react";
import marketingStyle from "../styles/marketing.css";
import MainHeader from "../components/navigation/MainHeader";

export default function ExpenseeAppLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />;
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyle }];
}
