import Navbar from "./components/common/Navbar";
import { useRoutes } from "react-router-dom";
import pageRoutes from "./routes/PageRoutes";
import { useStateValue } from "./utils/StateProvider";
import { useEffect } from "react";
function App() {
  const [{ logout }] = useStateValue();
  const routes = useRoutes(pageRoutes);
  useEffect(() => {}, [logout]);

  return (
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
