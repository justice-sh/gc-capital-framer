import { Outlet } from "react-router-dom";
import Header from "./widgets/header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
