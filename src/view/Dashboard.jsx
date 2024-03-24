import { useContext } from "react";

import context from "../ContextProvider";
import PageComponent from "../core/PageComponent";

export default function Dashboard() {
  const { currentUser } = useContext(context);
  console.log(currentUser);
  return (
    <>
      <PageComponent heading="Dashboard"></PageComponent>
    </>
  );
}
