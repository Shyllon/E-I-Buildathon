import { useEffect } from "react";
import { getHealth } from "./services/api";

function App() {
  useEffect(() => {
    getHealth().then(console.log);
  }, []);

  return <h1>VendorGuard</h1>;
}

export default App;